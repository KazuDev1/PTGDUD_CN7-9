import React from 'react';
import { AiOutlineMenu } from "react-icons/ai";
import "./style.css";


function Content() {
	return (
		<>
			<content>
				<div className='content'>
					<div className="filter-range">
						<div className='filter'>
							<div className='filter__title'>
                                <AiOutlineMenu />
                                <h3>Filter</h3>
							</div>
						</div>
						<div className='time'>

						</div>
						<div className='rating'>

						</div>
						<div className='apply'>

						</div>
					</div>
					<div>

					</div>
				</div>
			</content>
		</>
	);
}

export default Content;
