import React, { useContext, useEffect } from 'react';

import Tab from './Tab'
import Context from '../../context';
import useInput from '../../hooks/useInput';

interface TabsProps {}

function Tabs(props: TabsProps): JSX.Element {
    const { } = props;
    const [searchValue, searchInput] = useInput({});
    const { setGlobalState } = useContext(Context);

    useEffect(() => {
        setGlobalState({
            searchQuery: searchValue
        })
    }, [searchValue])


    return (
        <Context.Consumer>
            {
                (state) => {
                    return (
                        <div className="filters">
                            <div className="tabs">
                                <h5>Choose your keycap type</h5>
                                <ul>
                                    {state.tabs.map((tab: String, idx: number) => <Tab id={tab} key={idx} />)}
                                </ul>
                            </div>

                            <div className="search-input">
                                <h5>Search...</h5>
                                {searchInput}
                            </div>
                        </div>
                    )
                }
            }
        </Context.Consumer>
    )
}

export default Tabs;
