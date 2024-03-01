const express = require ('express')
const mongoose = require('mongoose')
const cors = require('cors')
const multer = require('multer')
const UserModel = require ('./models/Users')
const ClientsModel = require('./models/Clients');
const LeadsModel = require('./models/Leads');
const InstructorModel = require ('./models/Instructor');
const TutorModel = require ('./models/Tutor');
const SupportModel = require('./models/Support');
const LoginsModel = require('./models/Logins');
const CalendarModel = require('./models/Calendar');
const DocumentsModel = require('./models/Document');
const CampaignModel = require('./models/Campaign');
const EnrollusersModel = require('./models/EnrollUsers');
const HiringModel = require('./models/Hiring');

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
const Papa = require('papaparse');



const app = express()
app.use(cors())
app.use(express.json())
mongoose.connect("mongodb://127.0.0.1:27017/DCM")

app.get('/', (req, res) => {
    UserModel.find({})
    .then(users => res.json(users))
    .catch(err => res.json(err))
})



//upload CSV File to Server Start

app.post('/clients/upload', upload.single('file'), async (req, res) => {
  try {
    const csvData = req.file.buffer.toString('utf8');
    // Parse CSV data
    const parseResults = await new Promise((resolve) => {
      Papa.parse(csvData, {
        header: true,
        dynamicTyping: true,
        skipEmptyLines: true,
        complete: (results) => resolve(results),
      });
    });

    const clientsData = parseResults.data;

    // Save each client to the ClientsModel
    for (const client of clientsData) {
      await ClientsModel.create(client);
    }

    console.log('CSV data saved to /clients database');
    res.status(200).json({ message: 'CSV data uploaded and saved to /clients database' });
  } catch (error) {
    console.error('Error processing CSV file:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


//upload CSV File to Server Start for Leads

app.post('/leads/upload', upload.single('file'), async (req, res) => {
  try {
    const csvData = req.file.buffer.toString('utf8');

    // Parse CSV data
    const parseResults = await new Promise((resolve) => {
      Papa.parse(csvData, {
        header: true,
        dynamicTyping: true,
        skipEmptyLines: true,
        complete: (results) => resolve(results),
      });
    });

    const leadsData = parseResults.data;

    // Save each client to the ClientsModel
    for (const leads of leadsData) {
      await LeadsModel.create(leads);
    }

    console.log('CSV data saved to /clients database');
    res.status(200).json({ message: 'CSV data uploaded and saved to /clients database' });
  } catch (error) {
    console.error('Error processing CSV file:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


//clients

app.get('/clients', (req, res) => {
  ClientsModel.find({})
  .then(clients => res.json(clients))
  .catch(err => res.json(err))
})



// Update a course
app.put('/update/:id', async (req, res) => {
  try {
    const userId = req.params.id;
    const updatedUserData = req.body;

    const updatedUser = await UserModel.findByIdAndUpdate(userId, updatedUserData, { new: true });

    if (!updatedUser) {
      return res.status(404).send('User not found');
    }

    res.json(updatedUser);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});
  

// Delete Data

app.delete('/delete/:id', async (req, res) => {
  try {
    const userId = req.params.id;

    const deletedUser = await UserModel.findByIdAndDelete(userId);

    if (!deletedUser) {
      return res.status(404).send('User not found');
    }

    res.json(deletedUser);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

  



app.post("/CoursesandProgrammanagement", (req,res) => {
    UserModel.create(req.body)
    .then(Users => res.json(Users))
    .catch(err => res.json(err))

})


//clients fetch Data

app.get('/clients', (req, res) => {
  ClientsModel.find({})
  .then(clients => res.json(clients))
  .catch(err => res.json(err))
})

//clients Update Data

app.put('/clients/update/:id', async (req, res) => {
  try {
    const clientsId = req.params.id;
    const updatedclientsData = req.body;

    const updatedClients = await ClientsModel.findByIdAndUpdate(clientsId, updatedclientsData, { new: true });

    if (!updatedClients) {
      return res.status(404).send('User not found');
    }

    res.json(updatedClients);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

//clients Delete Data

app.delete('/clients/delete/:id', async (req, res) => {
  try {
    const clientsId = req.params.id;

    const deletedclients = await ClientsModel.findByIdAndDelete(clientsId);

    if (!deletedclients) {
      return res.status(404).send('User not found');
    }

    res.json(deletedclients);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

//add Data to Table

app.post("/Clientsprofiles", (req,res) => {
  ClientsModel.create(req.body)
  .then(Users => res.json(Users))
  .catch(err => res.json(err))
})

//* Leads Data Fetch and Update */

// leads fetch data

app.get('/leads', (req, res) => {
  LeadsModel.find({})
  .then(leads => res.json(leads))
  .catch(err => res.json(err))
})

//Leads Update Data


app.put('/leads/update/:id', async (req, res) => {
  try {
    const leadsId = req.params.id;
    const updatedleadsData = req.body;

    const updatedleads = await LeadsModel.findByIdAndUpdate(leadsId, updatedleadsData, { new: true });

    if (!updatedLeads) {
      return res.status(404).send('User not found');
    }

    res.json(updatedLeads);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

//Leads Delete Data

app.delete('/leads/delete/:id', async (req, res) => {
  try {
    const leadsId = req.params.id;

    const deletedleads = await LeadsModel.findByIdAndDelete(leadsId);

    if (!deletedleads) {
      return res.status(404).send('User not found');
    }

    res.json(deletedleads);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

//add Leads Data to Table

app.post("/LeadManagement", (req,res) => {
  LeadsModel.create(req.body)
  .then(Users => res.json(Users))
  .catch(err => res.json(err))
})



// Instructor fetch data


app.get('/instructor', (req, res) => {
  InstructorModel.find({})
  .then(instructor => res.json(instructor))
  .catch(err => res.json(err))
})

// Instructor Update data
app.put('/instructor/update/:id', async (req, res) => {
  try {
    const instructorId = req.params.id;
    const updatedinstructorData = req.body;

    const updatedinstructor = await InstructorModel.findByIdAndUpdate(instructorId, updatedinstructorData, { new: true });

    if (!updatedinstructor) {
      return res.status(404).send('User not found');
    }

    res.json(updatedinstructor);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Instructor Delete data
app.delete('/instructor/delete/:id', async (req, res) => {
  try {
    const instructorId = req.params.id;
    
    const deletedinstructor = await InstructorModel.findByIdAndDelete(instructorId);
    
    if (!deletedinstructor) {
      return res.status(404).send('User not found');
    }
    
    res.json(deletedinstructor);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});
//instructor Add Data

app.post("/instructorandtrainer", (req,res) => {
  InstructorModel.create(req.body)
  .then(Instructors => res.json(Instructors))
  .catch(err => res.json(err))
})





//Support Fetch Data

app.get('/support', (req, res) => {
  SupportModel.find({})
  .then(support => res.json(support))
  .catch(err => res.json(err))
})

//Support Update Data

app.put('/support/update/:id', async (req, res) => {
  try {
    const supportId = req.params.id;
    const updatedsupportData = req.body;

    const updatedsupport = await SupportModel.findByIdAndUpdate(supportId, updatedsupportData, { new: true });

    if (!updatedsupport) {
      return res.status(404).send('User not found');
    }

    res.json(updatedsupport);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

//Support Delete Data

app.delete('/support/delete/:id', async (req, res) => {
  try {
    const supportId = req.params.id;
    
    const deletedsupport = await SupportModel.findByIdAndDelete(supportId);
    
    if (!deletedsupport) {
      return res.status(404).send('User not found');
    }
    
    res.json(deletedsupport);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});
//LMS Login Fetch Data

app.get('/login', (req, res) => {
  LoginsModel.find({})
  .then(logins => res.json(logins))
  .catch(err => res.json(err))
})

//LMS Login Update Data


app.put('/login/update/:id', async (req, res) => {
  try {
    const loginsId = req.params.id;
    const updatedloginsData = req.body;
    
    const updatedlogins = await LoginsModel.findByIdAndUpdate(loginsId, updatedloginsData, { new: true });
    
    if (!updatedlogins) {
      return res.status(404).send('User not found');
    }
    
    res.json(updatedlogins);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

//LMS Login Delete Data

app.delete('/login/delete/:id', async (req, res) => {
  try {
    const loginsId = req.params.id;
    
    const deletedlogins = await LoginsModel.findByIdAndDelete(loginsId);
    
    if (!deletedlogins) {
      return res.status(404).send('User not found');
    }
    
    res.json(deletedlogins);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});


//calenders Fetch data
app.get('/calendar', (req, res) => {
  CalendarModel.find({})
  .then(calendar => res.json(calendar))
  .catch(err => res.json(err))
})

//calenders Update Data


app.put('/Calendar/update/:id', async (req, res) => {
  try {
    const calendarId = req.params.id;
    const updatedcalendarData = req.body;
    
    const updatedcalendar = await CalendarModel.findByIdAndUpdate(calendarId, updatedcalendarData, { new: true });
    
    if (!updatedcalendar) {
      return res.status(404).send('User not found');
    }
    
    res.json(updatedcalendar);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});


//calenders Delete Data

app.delete('/Calendar/delete/:id', async (req, res) => {
  try {
    const calendarId = req.params.id;
    
    const deletedcalendar = await CalendarModel.findByIdAndDelete(calendarId);
    
    if (!deletedcalendar) {
      return res.status(404).send('User not found');
    }
    
    res.json(deletedcalendar);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

//calendar upload data

app.post('/Calendar/upload', upload.single('file'), async (req, res) => {
  try {
    const csvData = req.file.buffer.toString('utf8');
    // Parse CSV data
    const parseResults = await new Promise((resolve) => {
      Papa.parse(csvData, {
        header: true,
        dynamicTyping: true,
        skipEmptyLines: true,
        complete: (results) => resolve(results),
      });
    });

    const calendarData = parseResults.data;

    // Save each client to the ClientsModel
    for (const calendar of calendarData) {
      await CalendarModel.create(calendar);
    }

    console.log('CSV data saved to /clients database');
    res.status(200).json({ message: 'CSV data uploaded and saved to /clients database' });
  } catch (error) {
    console.error('Error processing CSV file:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

//Documents Retrive Data

app.get('/documents', (req, res) => {
  DocumentsModel.find({})
  .then(documents => res.json(documents))
  .catch(err => res.json(err))
})

//Campaign Data Fetch

app.get('/campaigns', (req, res) => {
  CampaignModel.find({})
  .then(campaigns => res.json(campaigns))
  .catch(err => res.json(err))
})

//Enrollment and Registration Data Fetch

app.get('/enrollusers', (req, res) => {
  EnrollusersModel.find({})
  .then(enrollusers => res.json(enrollusers))
  .catch(err => res.json(err))
})

app.put('/enrollusers/update/:id', async (req, res) => {
  try {
    const enrollusersId = req.params.id;
    const updatedenrollusersIdData = req.body;
    
    const updatedenrollusers = await EnrollusersModel.findByIdAndUpdate(enrollusersId, updatedenrollusersIdData, { new: true });
    
    if (!updatedenrollusers) {
      return res.status(404).send('User not found');
    }
    
    res.json(updatedenrollusers);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

//Enrollment and Registration Delete Users

app.delete('/enrollusers/delete/:id', async (req, res) => {
  try {
    const enrollusersId = req.params.id;
    
    const deletedenrollusers = await EnrollusersModel.findByIdAndDelete(enrollusersId);
    
    if (!deletedenrollusers) {
      return res.status(404).send('User not found');
    }
    
    res.json(deletedenrollusers);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});




//Hiring 

//Hiring Fetch data
app.get('/hirings', (req, res) => {
  HiringModel.find({})
  .then(hiring => res.json(hiring))
  .catch(err => res.json(err))
})

//calenders Update Data


app.put('/hirings/update/:id', async (req, res) => {
  try {
    const hiringId = req.params.id;
    const updatedhiringData = req.body;
    
    const updatedhiring = await HiringModel.findByIdAndUpdate(hiringId, updatedhiringData, { new: true });
    
    if (!updatedhiring) {
      return res.status(404).send('User not found');
    }
    
    res.json(updatedhiring);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});


//calenders Delete Data

app.delete('/Calendar/delete/:id', async (req, res) => {
  try {
    const calendarId = req.params.id;
    
    const deletedcalendar = await CalendarModel.findByIdAndDelete(calendarId);
    
    if (!deletedcalendar) {
      return res.status(404).send('User not found');
    }
    
    res.json(deletedcalendar);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});



app.listen(3001, () =>{
    console.log("server is running")
})