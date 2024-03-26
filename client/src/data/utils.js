export const formatDate = (dateTimeString) => {
  const optionsDate = { month: 'long', day: '2-digit', year: 'numeric' };
  const optionsTime = { hour: '2-digit', minute: '2-digit', hour12: true };
  const date = new Date(dateTimeString);
  const formattedDate = date.toLocaleDateString('en-US', optionsDate);
  const formattedTime = date.toLocaleTimeString('en-US', optionsTime);
  return `${formattedDate} | ${formattedTime}`;
};


export const getClubTypes = () => {
  return fetch('http://localhost:3001/club-types')
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch club types');
      }
      return response.json();
    })
    .catch(error => {
      console.error('Error fetching club types:', error);
      throw error;
    });
};

export const saveClubs = (clubData) => {
  return fetch('http://localhost:3001/clubs', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(clubData)
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to save clubs');
    }
    return response.json();
  })
  .catch(error => {
    console.error('Error saving clubs:', error);
    throw error;
  });
};

export const getClubs = (params = null) => {
  let { id = null, type = null } = params;
  if (type === 'all') { type = null; } 
  
  let url = 'http://localhost:3001/clubs';
  if (id) {
    url += `?id=${id}`;
  } else if (type) {
    url += `?type=${type}`; // Append type parameter to the URL
  }

  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch clubs');
      }
      return response.json();
    })
    .catch(error => {
      console.error('Error fetching clubs:', error);
      throw error;
    });
};

export const updateClub = (id, clubData) => {
  const url = `http://localhost:3001/clubs/${id}`;

  return fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(clubData),
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to update club');
      }
      return response.json();
    })
    .catch(error => {
      console.error('Error updating club:', error);
      throw error;
    });
};

export const deleteClub = (clubId) => {
  return fetch(`http://localhost:3001/clubs/delete/${clubId}`, {
    method: 'PUT'
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to delete club');
      }
      return response.json();
    })
    .catch(error => {
      console.error('Error deleting club:', error);
      throw error;
    });
};


// forums
export const getForums = (params = null) => {
  let {id = null, interestType = null, curricularType = null, searchString = null, clubId = null} = params || {};
  if (interestType === 'all') { interestType = null; }
  if (curricularType === 'all') { curricularType = null; }

  let url = 'http://localhost:3001/forums';
  if (id) {
    url += `?id=${id}`;
  } else if (interestType && !curricularType) {
    url += `?club_id_2=${interestType}`;
  } else if (!interestType && curricularType) {
    url += `?club_id=${curricularType}`;
  } else if (interestType && curricularType) {
    url += `?club_id=${curricularType}&club_id_2=${interestType}`;
  } else if (clubId) {
    url += `?club_id=${clubId}`;
  }

  if (url.includes('?') && searchString) {
    url += `&search_string=${searchString}`;
  } else if (!url.includes('?') && searchString) {
    url += `?search_string=${searchString}`;
  }

  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch clubs');
      }
      return response.json();
    })
    .catch(error => {
      console.error('Error fetching clubs:', error);
      throw error;
    });
};

export const saveForum = (clubData) => {
  return fetch('http://localhost:3001/forums', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(clubData)
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to save clubs');
    }
    return response.json();
  })
  .catch(error => {
    console.error('Error saving clubs:', error);
    throw error;
  });
};

export const updateForum = (id, forumData) => {
  const url = `http://localhost:3001/forums/${id}`;

  return fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(forumData),
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to update forum');
      }
      return response.json();
    })
    .catch(error => {
      console.error('Error updating forum:', error);
      throw error;
    });
};

export const deleteForum = (forumId) => {
  return fetch(`http://localhost:3001/forums/${forumId}`, {
    method: 'DELETE'
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to delete club');
      }
      return response.json();
    })
    .catch(error => {
      console.error('Error deleting club:', error);
      throw error;
    });
};