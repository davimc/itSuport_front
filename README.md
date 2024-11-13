# IT Support FrontEnd

## Intuito
O intuito deste programa era ser um projeto de estudo com base no sistema que estava utilizando
na empresa que eu havia arrendado, no entanto há um potencial que futuramente será desenvolvido,
inicialmente será desenvolvido o gerenciamento de serviços, clientes e técnicos.


## Estruturas do projeto
### FrontEnd

* Typescript
* React
* React Router
* Material UI
* Axios

## Entitdades
* Cliente (User)
* Dispositivo (Device) -> Dispositivos eletrônicos
* Serviços (Job) -> serviços para dispositivos eletrônicos 
* Técnico (User)
* Endereço (Address) -> Endereço dos usuários
* Local (Local) -> Informa a localização de determindado dispositivo ou peça
* Peça (Part) -> Peça disponíveis ou do dispositivo
* Tarefa (Task) -> tarefas descrevem atividades realizadas nos serviços

## Funcionaldiades
### Cliente
* CRUD de cliente
* Edição de Clientes
* Associação de equipamentos
* Associação de serviços

### Técnico
* CRUD de técnico
* Associação de serviços
* Associação de tarefas

### Serviços
* CRUD de serviço
* Associação de tarefas

### Tarefas
* CRUD de tarefas