const company = {
  person: [
    {
      firstName: "James",
      lastName: "Smith",
      dob: "12-08-1990",
      country: "Singapore",
      idType: "Passport",
      widoId: 4578,
    },
    {
      firstName: "Anna",
      lastName: "Johnson",
      dob: "29-02-1967",
      country: "Singapore",
      idType: "Singapore Pass",
      widoId: 0956,
    },
    {
      firstName: "Richard",
      lastName: "Jameson",
      dob: "09-12-1978",
      country: "Japan",
      idType: "Work Permit",
      widoId: 5290,
    },
    {
      firstName: "Emma",
      lastName: "Semuels",
      dob: "05-01-1988",
      country: "USA",
      idType: "Passport",
      widoId: 1143,
    },
  ],
  officers: [
    {
      person: 4578,
      role: "Shareholder",
      startDate: "13-08-2010",
      widoId: 2806,
    },
    {
      person: 1143,
      role: "Shareholder",
      startDate: "25-05-2015",
      widoId: 4530,
    },
    {
      person: 5290,
      role: "Director",
      startDate: "31-10-2018",
      widoId: 8657,
    },
    {
      person: 5290,
      role: "Secretary",
      startDate: "17-07-2012",
      widoId: 0012,
    },
  ],
  shareholdingDetail: [
    {
      person: 4578,
      certificateNumber: 1,
      AcquisitionDate: "06-02-2017",
      shareClass: "Ordinary",
      shareCurrency: "US Dollar",
      shareQty: 100,
      widoId: 2632,
    },
    {
      person: 4578,
      certificateNumber: 2,
      AcquisitionDate: "06-02-2017",
      shareClass: "Ordinary",
      shareCurrency: "US Dollar",
      shareQty: 400,
      widoId: 9235,
    },
    {
      person: 4578,
      certificateNumber: 3,
      AcquisitionDate: "19-06-2018",
      shareClass: "Ordinary",
      shareCurrency: "Preferred",
      shareQty: 250,
      widoId: 2948,
    },
    {
      person: 1143,
      certificateNumber: 4,
      AcquisitionDate: "05-09-2019",
      shareClass: "Ordinary",
      shareCurrency: "Euro",
      shareQty: 150,
      widoId: 1212,
    },
  ],
  shareholdingSummary: [
    {
      person: 4578,
      shareClass: "Ordinary",
      shareCurrency: "US Dollar",
      shareQty: 500,
      widoId: 9822,
    },
    {
      person: 4578,
      shareClass: "Preferred",
      shareCurrency: "Singapore Dollar",
      shareQty: 250,
      widoId: 2343,
    },
    {
      person: 1143,
      shareClass: "Ordinary",
      shareCurrency: "Euro",
      shareQty: 150,
      widoId: 9678,
    },
  ],
};

const addNewShareHolder = (
  addNewHolder,
  subsctractFrom,
  shareQty,
  shareClass,
  shareCurrency
) => {
  const date = new Date();
  const newShareHolder = company.person.filter(
    (person) =>
      person.firstName === addNewHolder.firstName &&
      person.lastName === addNewHolder.lastName
  );

  const substractShareHolder = company.person.filter(
    (person) =>
      person.firstName === subsctractFrom.firstName &&
      person.lastName === subsctractFrom.lastName
  );

  company.officers.push({
    person: newShareHolder[0].widoId,
    role: "Shareholder",
    startDate: `${date.getDay()}-${date.getMonth()}-${date.getFullYear()}`,
    widoId: 2806,
  });

  addNewShareCertificate({
    person: newShareHolder[0].widoId,
    certificateNumber: company.shareholdingDetail.length + 2,
    AcquisitionDate: `${date.getDay()}-${date.getMonth()}-${date.getFullYear()}`,
    shareClass: shareClass,
    shareCurrency: shareCurrency,
    shareQty: shareQty,
    widoId: 1212,
  });

  substractShares(substractShareHolder[0].person, shareQty);

  newShareSummary({
    person: substractShareHolder[0].widoId,
    shareClass: shareClass,
    shareCurrency: shareCurrency,
    shareQty: shareQty,
    widoId: 9678,
  });
};

const addNewShareCertificate = (newShareCertificate) => {
  company.shareholdingDetail.push(newShareCertificate);
};

const substractShares = (person, shareQty) => {
  company.shareholdingSummary.forEach((shareHolder) => {
    if (shareHolder.person === person) {
      shareHolder.shareQty -= shareQty;
    }
  });
};

const newShareSummary = (person) => {
  company.shareholdingSummary.push(person);
};

addNewShareHolder(
  { firstName: "Richard", lastName: "Jameson" },
  { firstName: "Emma", lastName: "Semuels" },
  50,
  "Ordinars",
  "Euro"
);
