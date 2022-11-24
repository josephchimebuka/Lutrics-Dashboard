const getActivityReports = () => {
  return fetch("http://localhost:8000/api/report/get-activities")
                .then(response => response.json())
                .then(data => data?.data)
                .catch(err => console.log(err));
}

export {
  getActivityReports
}