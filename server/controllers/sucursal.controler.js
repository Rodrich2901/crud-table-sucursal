const { Pool, Client } = require("pg");
const client = new Client();

const cfg = require("../config.json");

const pool = new Pool(cfg);

const getSucursal = async (req,res) => {
    try{
        const sucursal = await pool.query("select * from sucursales");
        res.json(sucursal.rows)
    } catch (err) {
        res.json(err);
    }
}

const postSucursal = async (req, res) => {
    const { cod_sucursal,sucursal } = req.body;
    try {       
      const sucursales = await pool.query(
        "insert into sucursales (cod_sucursal,sucursal) values($1,$2)",
        [cod_sucursal,sucursal]
      );      
      res.json({ status: "Registro exitoso" });
    } catch (err) {
      res.json(err);
    }
  };

  /*const postProduct = async (req, res) => {
    const { category, id_product, location, name, price } = req.body;
    try {
      const product = await pool.query(
        "insert into products (name,category,location,price) values($1,$2,$3,$4)",
        [name, category, location, price]
      );
      res.json({ status: "inserted success" });
    } catch (err) {
      res.json(err);
    }
  };*/

const putSucursal = async (req, res) => {
    const id = req.params.id;
    const { cod_sucursal,sucursal} = req.body;
    try {
      const sucursales = await pool.query(
        "update sucursales set sucursal=$1 where cod_sucursal = $2",
        [sucursal,id]
      );
      res.json({ status: "Actualizacion exitosa" });
    } catch (err) {
      res.json(err);
    }
  };

const deleteSucursal = async (req, res) => {
    const id = req.params.id;
    try {
      const sucursales = await pool.query(
        "delete from sucursales where cod_sucursal = $1",
        [id]
      );
      res.json({ status: "Borrado exitoso" });
    } catch (err) {
      res.json(err);
    }
  };

module.exports = { getSucursal, postSucursal, putSucursal, deleteSucursal };
