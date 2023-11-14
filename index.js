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

//Support Fetch Data

app.get('/support', (req, res) => {
  SupportModel.find({})
  .then(support => res.json(support))
  .catch(err => res.json(err))
})

//LMS Login Fetch Data

app.get('/login', (req, res) => {
  LoginsModel.find({})
  .then(logins => res.json(logins))
  .catch(err => res.json(err))
})

//calenders Fetch data
app.get('/calendar', (req, res) => {
  CalendarModel.find({})
  .then(calendar => res.json(calendar))
  .catch(err => res.json(err))
})

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




app.listen(3001, () =>{
    console.log("server is running")
})