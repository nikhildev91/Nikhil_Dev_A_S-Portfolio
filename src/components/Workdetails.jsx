/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import NavBar from './NavBar';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import Axios from 'axios';
import { API_URL } from '../utility/urls';
import { FaSpinner } from 'react-icons/fa';

export default function Workdetails() {
  const { id } = useParams();
  const [item, setItem] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProjectDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps, no-use-before-define
  }, []);

  const getProjectDetails = async () => {
    const details = await Axios.get(`${API_URL}/api/get-project-details/${id}`);
    if (details) {
      setItem(details.data);
      setLoading(false);
    }
  };

  return (
    <>
      <NavBar title="work_details" />

      {loading ? (
        <div className="bg-[#0a192f] min-h-screen text-white flex items-center justify-center">
          <FaSpinner style={{ fontSize: '100px' }} />
        </div>
      ) : (
        <div>
          {item ? (
            <div className="w-full min-h-screen md:h-screen bg-[#0a192f]">
              {/* Container */}
              <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full pt-10 md:pt-0">
                <p className="text-white mt-12 md:mt-0 text-4xl md:text-5xl font-bold">
                  {item.name}{' '}
                  {item.status === 'On Progress' && (
                    <span className="text-sm border border-yellow-400 text-yellow-300 p-3">
                      On Progress
                    </span>
                  )}
                  {item.status === 'Completed' && (
                    <span className="text-sm border border-green-400 text-green-300 p-3">
                      Completed
                    </span>
                  )}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-2">
                  <div className="flex items-center justify-center">
                    <img src={item.image} alt="" className="w-full" />
                  </div>

                  {/* <img src={Logo} alt="" style={{ width: '50px' }} /> */}
                  <div className="text-white pt-5 p-5 h-full">
                    <p>{item.description}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-10">
                      <a href={item.github} target="_blank" rel="noreferrer">
                        <button
                          className="text-center rounded-lg px-4 py-3 m-2 w-full
                             bg-white text-gray-700 font-bold text-lg"
                        >
                          Code
                        </button>
                      </a>
                      <a href={item.live} target="_blank" rel="noreferrer">
                        <button
                          className="text-center rounded-lg px-4 py-3 m-2 w-full
                             bg-white text-gray-700 font-bold text-lg"
                        >
                          Live
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="w-full min-h-screen md:h-screen bg-[#0a192f]">
              {/* Container */}
              <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full pt-10 md:pt-0">
                <p className="text-4xl md:text-5xl font-bold text-white">
                  Not found
                </p>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}
