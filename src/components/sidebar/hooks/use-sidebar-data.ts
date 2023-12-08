import _ from "lodash";
import { useCallback, useMemo, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { ParameterRowType, dataActions } from "../../../redux/slices/data-slice";
import { useAppDispatch, useAppSelector } from "../../../redux/store";

export type ParameterDictionary = {
    [key: string]: ParameterRowType;
};

export type Parameters = {
    inputDictionary: ParameterDictionary;
    outputDictionary: ParameterDictionary;
}

export type RowType = 'input' | 'output';

const toDictionary = (rows: ParameterRowType[]) =>
    rows.reduce((acc, param) => {
        acc[param.id] = param;
        return acc;
    }, {} as ParameterDictionary);

const useSidebarData = () => {
    // #region Redux
    const dispatch = useAppDispatch();
    const algorithmNameRedux = useAppSelector(x => x.data.algorithmName);
    const inputRows = useAppSelector(x => x.data.inputParameters);
    const outputRows = useAppSelector(x => x.data.outputParameters);
    const dictionary = useMemo<Parameters>(() => ({
        inputDictionary: toDictionary(inputRows),
        outputDictionary: toDictionary(outputRows),
    }), [inputRows, outputRows]);
    // #endregion

    // #region Local
    const [rowData, setRowData] = useState<Parameters>(dictionary);
    const [algorithmName, setAlgorithmName] = useState<string>(algorithmNameRedux);
    // #endregion

    // #region Param text Changes
    const onChange = useCallback((id: string, type: RowType, key: 'dataType' | 'name') => (val: string) => {
        const clone = _.cloneDeep(rowData);
        const dictionary = type === 'input' ? clone.inputDictionary : clone.outputDictionary;
        if (key === 'dataType') dictionary[id].dataType = val;
        if (key === 'name') dictionary[id].name = val;
        setRowData(clone);
    }, [rowData]);
    const onNameChange = useCallback((id: string, type: RowType) => (val: string) => {
        onChange(id, type, 'name')(val);
    }, [onChange]);
    const onDataTypeChange = useCallback((id: string, type: RowType) => (val: string) => {
        onChange(id, type, 'dataType')(val);
    }, [onChange]);
    // #endregion

    // #region Add/Remove row changes
    const onAddRow = useCallback((type: RowType) => () => {
        const clone = _.cloneDeep(rowData);
        const id = uuidv4();
        const dictionary = type === 'input' ? clone.inputDictionary : clone.outputDictionary;
        dictionary[id] = {
            id,
            name: '',
            dataType: '',
            type,
        };
        setRowData(clone);
        return id;
    }, [rowData]);
    const onRemoveRow = useCallback((id: string, type: RowType) => () => {
        const clone = _.cloneDeep(rowData);
        const dictionary = type === 'input' ? clone.inputDictionary : clone.outputDictionary;
        delete dictionary[id];
        setRowData(clone);
    }, [rowData]);

    // #endregion

    const onAlgorithmNameChange = (val: string) => {
        setAlgorithmName(val);
    }

    const onSave = useCallback(() => {
        dispatch(dataActions.setParameters({
            inputParameters: Object.values(rowData.inputDictionary),
            outputParameters: Object.values(rowData.outputDictionary),
        }));
        dispatch(dataActions.setAlgorithmName(algorithmName));
    }, [dispatch, rowData.inputDictionary, rowData.outputDictionary, algorithmName]);

    return {
        rowData,
        onNameChange,
        onDataTypeChange,
        onAddRow,
        onRemoveRow,
        inputDictionary: rowData.inputDictionary,
        outputDictionary: rowData.outputDictionary,
        onSave,
        algorithmName,
        onAlgorithmNameChange
    }
}

export default useSidebarData;