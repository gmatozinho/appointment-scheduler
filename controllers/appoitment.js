const professional_input = {
    day: {
      starts: 8,
      ends: 10,
    },
  };
  
  const professional = {
    id: "x",
    professionalName: "x",
  };
  //checar disponibilidade, ao escolher horario checa se é possivel e se for fecha o slote fecha o proximo
  const create = (body) => {
    const newProfessional = new professional({
      name: body.name,
    });
  
    newProfessional
      .save()
      .then((result) => {
        res.json(result);
      })
      .catch((error) => {
        res.status(500).json(error);
      });
  };
  
  const read = () => {};
  
  const update = () => {};
  
  const remove = () => {};
  

  