import { getMonstersFromRepository, updateMonsterInRepository, createMonsterInRepository, deleteMonsterFromRepository } from '../repositories/monster.repository.js';

export const getMonsters = async (req, res) => {
    try {
      const monsters = await getMonstersFromRepository({});
      res.status(200).send(monsters);
    } catch (e) {
      res.status(500).send(e.message, 'failed to fetch a list of monsters');
    }
}


export const getMonster = async (req, res) => {
    const { id } = req.params;
    try {
      const monster = await getMonstersFromRepository({ id: id });
      res.status(200).send(monster);
    } catch (e) {
      res.status(500).send(e.message, `failed to fetch monster ${id}`);
    }
}


export const updateMonster = async (req, res) => {
    const { id } = req.params;
    const { body } = req;
    try {
      const monster = await updateMonsterInRepository({ id: id }, body);
      res.status(200).send(monster);
    } catch (e) {
      res.status(500).send(e.message, `failed to update monster ${id}`);
    }
}


export const createMonster = async (req, res) => {
    const { body } = req;
    try {
      const monster = await createMonsterInRepository(body);
      console.log(monster);
      res.status(200).send(monster);
    } catch (e) {
      res.status(500).send(e.message, `failed to create monster`);
    }
}

export const deleteMonster = async (req, res) => {
    const { id } = req.params;
    try {
      const monster = await deleteMonsterFromRepository({ id: id });
      if (monster) {
        res.status(204).send();
      } 
      else {
        res.status(404).send(e.message, `failed to delete monster ${id}`);
      }
    } catch (e) {
      res.status(500).send(e.message, `failed to delete monster ${id}`);
    }
}