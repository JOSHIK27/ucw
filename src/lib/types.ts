export type courseProp = {
  id: Number;
  name: string;
  prof_id: Number;
  university: string;
};

export type universityProp = {
  id: Number;
  name: string;
  country: string;
};

export type profProp = {
  id: Number;
  name: string;
  university_id: Number;
};
