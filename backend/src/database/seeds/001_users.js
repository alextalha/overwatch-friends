
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('usuarios').del()
    .then(function () {
      // Inserts seed entries
      return knex('usuarios').insert([
        { email: "alex.talha@hotmail.com",
          battletag :"MegaManerim-1198",
          plataforma: "pc",
        },
        { email: "nicolas.talha@hotmail.com",
        battletag :"MegaManerimJR-0609",
        plataforma: "pc",
      },
      ]);
    });
};
