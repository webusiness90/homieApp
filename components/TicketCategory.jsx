import React, { useMemo, useState } from 'react';
import RadioGroup from 'react-native-radio-buttons-group';

export default function TicketCategory() {

    const radioButtons = useMemo(() => ([
        {
            id: '1',
            label: 'Personal',
            value: 'Personal'
        },
        {
            id: '2',
            label: 'Community',
            value: 'Community'
        }
    ]), []);

    const [selectedId, setSelectedId] = useState('1');

    return (
        <RadioGroup 
            radioButtons={radioButtons} 
            onPress={setSelectedId}
            selectedId={selectedId}
            layout="row"
        />
    );

}