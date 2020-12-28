# Mreza Mladih Platform

Application for managing Mreza Mladih Dijaspore. Keep track of your members and stay in contact.

This project was generated using [Nx](https://nx.dev).

## Getting Started

Visit our webiste [platform.mrezamladih.at](https://platform.mrezamladih.at/).

### Quick Start & Documentation

[Nx Documentation](https://nx.dev/angular)
[10-minute video showing all Nx features](https://nx.dev/angular/getting-started/what-is-nx)
[Interactive Tutorial](https://nx.dev/angular/tutorial/01-create-application)

### Prerequisites
TBD
### Installing
TBD
## Deployment
TBD
## Built With
TBD

## Build & Run
The easiest way to run the API, DB and frontend all together is docker-compose:
```bash
docker-compose up --build
```

Without docker, things are a little more complicated:

```bash
# installation
npm install

# run frontend
nx serve mreza-mladih-platform

# run backend
# assuming DB is already running
nx serve api
```

After the build the app should be available at `http://localhost:4200/` and API docs are at `http://localhost:3000/api`.

### Running unit tests

Run `ng test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

### Running end-to-end tests

Run `ng e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/ermin-muratovic/mreza-mladih-platform/tags). 

## Authors

* [**Ermin Muratović**](https://github.com/ermin-muratovic) - *owner*
* [**Maid Sabanović**](https://github.com/Maido47) - *owner*
* [**Malik Ćatić**]() - *owner*

## License

This project is licensed under the GPL License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

Thanks to everybody supporting this project.

Thanks to [**Uprava za vanjske poslove i dijasporu**](https://www.islamskazajednica.ba/adresar/uprave-rijaseta/uprava-za-vanjske-poslove-i-dijasporu) for supporting Mreza Mladih Dijaspore.
