create database pregnant;
CREATE TABLE `usuarios` (
  `usuario` varchar(60) NOT NULL,
  `password` varchar(20) NOT NULL,
  `Nombre` varchar(30) NOT NULL,
  `Apellidos` varchar(50) NOT NULL,
  `FechaNacimientoMama` date NOT NULL,
  `FechaEmbarazo` date DEFAULT NULL,
  `NombrePadre` varchar(30) DEFAULT NULL,
  `FechaNacimientoPadre` date DEFAULT NULL,
  `ApellidosPadre` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`usuario`)
);
CREATE TABLE `antojos` (
  `usuario` varchar(60) NOT NULL,
  `NombreDelAntojo` varchar(50) NOT NULL,
  `TipoDeAntojo` varchar(50) DEFAULT NULL,
  `FechaDelAntojo` date DEFAULT NULL,
  `VecesDadasDelAntojo` int DEFAULT NULL,
  `AQuienLeDio` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`NombreDelAntojo`),
  foreign key (`usuario`) references usuarios(`usuario`)
);


select * from usuarios;
select * from antojos;