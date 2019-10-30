export default {
  filter_sets: [
    // {
    //   name: 'По умолчанию',
    //   from: new Date(),
    //   to: new Date(),
    //   period_category: 'last_week',
    //   city: null,
    //   referrer: null,
    //   gender: null
    // },
    {
      name: 'Новый',
      from: new Date(),
      to: new Date(),
      period_category: null,
      region_id: null,
      referrer: null,
      gender: null
    }
  ],
  // choosen_filter_set: 'default',
  filter_set: {
    name: 'Произвольный',
    from: new Date().toISOString().substr(0, 10),
    to: new Date().toISOString().substr(0, 10),
    region_id: null,
    referrer: null,
    gender: null
  },
  filter_set_template: {
    name: '',
    from: new Date(),
    to: new Date(),
    period_category: 'last_week',
    region_id: null,
    referrer: null,
    gender: null
  },
  regions: [],
  age_categories: ['20-25', '26-34', '35-44', '45-54', '55-64', 'младше 20', 'старше 64'],
  kbms: [],
  gifts: [],
  referrers: [],
  departments: [],
  sale_centers: [],
  sale_channels: [],
  vehicle_brands: [],
  vehicle_models: [],
  vehicle_year_categories: []
}
