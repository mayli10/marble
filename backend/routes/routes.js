const express = require('express');
const router = express.Router();

// YOUR API ROUTES HERE

// SAMPLE ROUTE
router.use('/search/', (req, res) => {
  // req.body.filter
  var list = [
    { name: 'Potato Boss',
      profession: 'Psychiatrist',
      //image: therapist1,
      number: '(999)-555-8888',
      networks: ['UnitedHealthcare', 'BlueCross', 'Medicare'],
    },
    { name: 'David Jakubowicz',
      profession: 'Psychologist',
      //image: therapist2,
      number: '(777)-444-0000',
      networks: ['Aetna', 'Anthem', 'PacifiCare'],
    },
    { name: 'Mental Health America',
      profession: 'Community Center',
      //image: therapist1,
      number: '(777)-444-0000',
      networks: ['Aetna', 'Anthem', 'BlueCross'],
    },
    { name: 'Rain Center',
      profession: 'Psychiatric Test Center',
      //image: therapist1,
      number: '(777)-444-0000',
      networks: ['Aetna', 'Anthem', 'PacifiCare'],
    }
  ]

  console.log(req.body.filters)

  list = list.filter((item)=>{
    return item.networks.indexOf(req.body.filters) >= 0;
  })

  res.json(list)

    // res.json({ success: true });
});

module.exports = router;
