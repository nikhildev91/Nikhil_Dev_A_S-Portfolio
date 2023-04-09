import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProject } from '../actions/admin';
import Axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { useEffect } from 'react';
import { API_URL } from '../utility/urls';

function AddProject() {
  const dispatch = useDispatch();
  const [projectName, setProjectName] = useState('');
  const [gitLink, setGitLink] = useState('');
  const [liveLink, setLiveLink] = useState('');
  const [url, setUrl] = useState();
  const [description, setDescription] = useState('');
  const [projectstatus, setProjectstatus] = useState('');
  const [projects, setProjects] = useState([]);
  const [showEditPage, setShowEditPage] = useState(false);
  const [editDetails, setEditDetails] = useState({});

  const [refresh, setRefresh] = useState(false);

  const projectInfo = useSelector((state) => state.projectInfo);
  var { status } = projectInfo;
  useEffect(() => {
    getProjectList();
  }, [refresh, status]);

  const getProjectList = async () => {
    const data = await Axios.get(`${API_URL}/api/project-list`);
    if (data) {
      setProjects(data.data);
    }
  };
  const uploadImage = (e) => {
    const formData = new FormData();
    formData.append('file', e.target.files[0]);
    formData.append('upload_preset', 'p9fs3b8z');

    Axios.post(
      'https://api.cloudinary.com/v1_1/dikpoctfq/image/upload',
      formData
    ).then((res) => {
      setUrl(res.data.url);
    });
  };
  const handleSubmit = async () => {
    if (
      projectName &&
      gitLink &&
      liveLink &&
      url &&
      description &&
      projectstatus
    ) {
      dispatch(
        addProject(
          projectName,
          gitLink,
          liveLink,
          url,
          description,
          projectstatus
        )
      );
      setProjectName('');
      setGitLink('');
      setLiveLink('');
      setUrl('');

      setDescription('');
      setProjectstatus('');
    } else {
      toast(
        'Enter all fields or Once Again Click on Submit Button After close notificaton!...'
      );
    }
  };

  const ar = (name, action) => {
    let text = `Are you sure to ${action} ${name}!`;
    if (window.confirm(text) === true) {
      return true;
    } else {
      text = false;
    }
  };

  const deleteProject = async (id, name) => {
    const confirm = ar(name, 'delete');
    if (confirm) {
      await Axios.post(`${API_URL}/api/delete-project`, { id });
      setRefresh(!refresh);
    } else {
      toast('Cancelled');
    }
  };
  const handleCloseEditPage = (confirm) => {
    if (confirm) {
      // setEditDetails({});
      // setProjectName('');
      // setGitLink('');
      // setLiveLink('');
      // setDescription('');
      // setProjectstatus('');
      // setUrl('');
      setShowEditPage(false);
    }
  };

  const editProject = async (id, name) => {
    const confirm = ar(name, 'edit');
    if (confirm) {
      const details = await Axios.get(
        `${API_URL}/api/get-project-details/${id}`
      );
      if (details) {
        setEditDetails(details.data);
        setProjectName(editDetails.name);
        setGitLink(editDetails.github);
        setLiveLink(editDetails.live);
        setDescription(editDetails.description);
        setProjectstatus(editDetails.status);
        setUrl(editDetails.image);

        if (
          projectName &&
          gitLink &&
          liveLink &&
          url &&
          description &&
          projectstatus
        ) {
          setShowEditPage(true);
        }

        return;
      }
      // await Axios.post(`${API_URL}/api/delete-project`, { id });
      // setRefresh(!refresh);
    } else {
      toast('Cancelled');
    }
  };

  const handleEditProject = async () => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const details = await Axios.post(
      `${API_URL}/api/edit-project`,
      {
        id: editDetails._id,
        projectName,
        gitLink,
        liveLink,
        image: url,
        description,
        projectstatus,
      },
      config
    );
    if (details.data.status) {
      setEditDetails('');
      setProjectName('');
      setGitLink('');
      setLiveLink('');
      setDescription('');
      setProjectstatus('');
      setUrl('');
      setShowEditPage(false);
      setRefresh(!refresh);
      toast('Successfully edited Project');
    }
  };
  return (
    <div>
      <div className="border-gray-300 border-b-4 text-4xl font-bold">
        Add Project
      </div>

      <div className="flex items-center justify-between p-10">
        <ToastContainer position="top-center" autoClose={3000} />
        <div className="w-[50%] m-5">
          <label htmlFor="">Project Name</label>
          <input
            onChange={(e) => setProjectName(e.target.value)}
            value={projectName}
            type="text"
            placeholder="Project Name"
            className="bg-gray-100"
            style={{ width: '100%', padding: '10px' }}
          />
        </div>
        <div className="w-[50%]">
          <label htmlFor="">GitHub Link</label>
          <input
            onChange={(e) => setGitLink(e.target.value)}
            value={gitLink}
            type="text"
            placeholder="GitHub Link"
            className="bg-gray-100"
            style={{ width: '100%', padding: '10px' }}
          />
        </div>
      </div>
      <div className="flex items-center justify-between p-10">
        <div className="w-[50%] m-5">
          <label htmlFor="">Live Link</label>
          <input
            onChange={(e) => setLiveLink(e.target.value)}
            value={liveLink}
            type="text"
            placeholder="Live Link"
            className="bg-gray-100"
            style={{ width: '100%', padding: '10px' }}
          />
        </div>
        <div className="w-[50%]">
          <label htmlFor="">Project Image</label>
          <input
            type="file"
            onChange={(e) => {
              uploadImage(e);
            }}
            placeholder="Project Image"
            className="bg-gray-100"
            style={{ width: '100%', padding: '10px' }}
          />
        </div>
      </div>
      <div className="flex items-center justify-between p-10">
        <div className="w-[50%] m-5">
          <label htmlFor="">Description</label>
          <input
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            type="textarea"
            placeholder="Enter Description in max 200 words"
            className="bg-gray-100"
            style={{ width: '100%', padding: '10px' }}
          />
        </div>
        <div className="w-[50%]">
          <select
            name=""
            id=""
            style={{ width: '100%', padding: '10px' }}
            className="mt-5"
            value={projectstatus}
            onChange={(e) => setProjectstatus(e.target.value)}
          >
            <option value="">Select Project Status</option>
            <option value="On Progress">On Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
      </div>
      <div className="flex items-center justify-center p-10">
        <button
          onClick={() => handleSubmit()}
          className="bg-blue-400 p-5 rounded-xl w-full text-lg text-white font-bold"
        >
          Submit
        </button>
      </div>

      <div className="border-gray-300 border-b-4 text-4xl font-bold mt-10">
        Projects
      </div>
      <div className="mt-5">
        <table className="w-full">
          <tr className="">
            <th className="bg-gray-200 w-[25%] p-5">Name</th>
            <th className="bg-gray-200 w-[25%] p-5">GitHub Link</th>
            <th className="bg-gray-200 w-[25%] p-5">Live Link</th>
            <th className="bg-gray-200 w-[25%] p-5">Delete Action</th>
          </tr>

          {projects &&
            projects.map((project) => (
              <tr key={project.id}>
                <td className="bg-gray-200 w-[25%] text-center p-5">
                  {project.name}
                </td>

                <td className="bg-gray-200 w-[25%] text-center p-5">
                  {project.github}
                </td>
                <td className="bg-gray-200 w-[25%] text-center p-5">
                  {project.live}
                </td>
                <td className="bg-gray-200 w-[25%] text-center p-5">
                  <button
                    onClick={() => editProject(project._id, project.name)}
                    className="bg-blue-400 p-1 w-[50%] rounded-lg"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteProject(project._id, project.name)}
                    className="bg-red-400 p-1 w-[50%] rounded-lg"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </table>
      </div>
      {/* modal */}
      {showEditPage && (
        <div id="myModal" className="modal">
          <div className="modal-content">
            <span onClick={() => handleCloseEditPage(true)} className="close">
              &times;
            </span>
            <u>
              <p className="font-bold text-4xl">Edit Project</p>
            </u>
            <div className="flex items-center justify-between p-10">
              <ToastContainer position="top-center" autoClose={3000} />
              <div className="w-[50%] m-5">
                <label htmlFor="">Project Name</label>
                <input
                  onChange={(e) => setProjectName(e.target.value)}
                  value={projectName}
                  type="text"
                  placeholder="Project Name"
                  className="bg-gray-100"
                  style={{ width: '100%', padding: '10px' }}
                />
              </div>
              <div className="w-[50%]">
                <label htmlFor="">GitHub Link</label>
                <input
                  onChange={(e) => setGitLink(e.target.value)}
                  value={gitLink}
                  type="text"
                  placeholder="GitHub Link"
                  className="bg-gray-100"
                  style={{ width: '100%', padding: '10px' }}
                />
              </div>
            </div>
            <div className="flex items-center justify-between p-10">
              <div className="w-[50%] m-5">
                <label htmlFor="">Live Link</label>
                <input
                  onChange={(e) => setLiveLink(e.target.value)}
                  value={liveLink}
                  type="text"
                  placeholder="Live Link"
                  className="bg-gray-100"
                  style={{ width: '100%', padding: '10px' }}
                />
              </div>
              <div className="w-[50%]">
                <label htmlFor="">Project Image</label>
                <input
                  type="file"
                  onChange={(e) => {
                    uploadImage(e);
                  }}
                  placeholder="Project Image"
                  className="bg-gray-100"
                  style={{ width: '100%', padding: '10px' }}
                />
              </div>
            </div>
            <div className="flex items-center justify-between p-10">
              <div className="w-[50%] m-5">
                <label htmlFor="">Description</label>
                <input
                  onChange={(e) => setDescription(e.target.value)}
                  value={description}
                  type="text"
                  placeholder="Live Link"
                  className="bg-gray-100"
                  style={{ width: '100%', padding: '10px' }}
                />
              </div>
              <div className="w-[50%]">
                <select
                  name=""
                  id=""
                  style={{ width: '100%', padding: '10px' }}
                  className="mt-5"
                  defaultValue={projectstatus}
                  onChange={(e) => setProjectstatus(e.target.value)}
                >
                  <option value="">Select Project Status</option>
                  <option value="On Progress">On Progress</option>
                  <option value="Completed">Completed</option>
                </select>
              </div>
            </div>
            <pre>{JSON.stringify(editDetails)}</pre>
            <div className="flex items-center justify-center p-10">
              <button
                onClick={() => handleEditProject()}
                className="bg-blue-400 p-5 rounded-xl w-full text-lg text-white font-bold"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddProject;
