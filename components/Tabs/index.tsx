import React, { useContext } from 'react';
import { InititalState } from 'typings';
import Router, { useRouter } from 'next/router';

import Tab from './Tab';
import Context from '../../context';
import Select from '../Select';
import { AVAILABILITY_FILTER, CAP_FILTER } from '../../constants';

interface TabsProps {}

function Tabs(props: TabsProps): JSX.Element {
    const {} = props;
    const state = useContext<InititalState>(Context);
    const { query } = useRouter();

    const resetFilter = () => Router.push('/');

    return (
        <>
            <div className="filters">
                {/* <div className="tabs">
                    <label className="label">Choose your keycap type</label>
                    <ul>
                        {state.tabs.map((tab: String, idx: number) => (
                            <Tab type={CAP_FILTER} id={tab} key={idx} />
                        ))}
                    </ul>
                </div>

                <div className="select">
                    <Select
                        label="Filter caps by type"
                        name="Choose type"
                        onSelectChange={(selectedFilterValue) =>
                            state.setGlobalState({
                                filters: {
                                    ...query,
                                    activeTab: selectedFilterValue,
                                },
                            })
                        }
                        values={state.tabs.map((t) => ({ id: t, name: t }))}
                    />
                </div> */}

                <div className="tabs">
                    <label className="label">Filter availability</label>
                    <ul>
                        {state.availability.map((tab: String, idx: number) => (
                            <Tab type={AVAILABILITY_FILTER} id={tab} key={idx} />
                        ))}
                        <li>
                            {query.availability !== 'none' && (
                                <p className="small light clickable" onClick={resetFilter}>
                                    reset
                                </p>
                            )}
                        </li>
                    </ul>
                </div>
                <div className="select">
                    <Select
                        label="Filter caps by availability"
                        name="Choose availability"
                        onSelectChange={(selectedFilterValue) => Router.push(`/?availability=${selectedFilterValue}`)}
                        values={state.availability.map((t) => ({
                            id: t,
                            name: t,
                        }))}
                    />
                </div>

                <div className="counter">
                    <label className="label">Count:</label>
                    <p className="light">
                        {state.keycapsets.length}/{state.allKeycapsetsCount}
                    </p>
                </div>
            </div>
        </>
    );
}

export default Tabs;
