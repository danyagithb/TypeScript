"use strict";
let coursesArray9 = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
for (const item of coursesArray9) {
    let divContainer = document.createElement('div');
    divContainer.classList.add('container');
    document.body.appendChild(divContainer);
    let header = document.createElement('div');
    header.classList.add('header');
    let title = document.createElement('h2');
    title.classList.add('title');
    title.innerText = item.title;
    header.appendChild(title);
    let divDuration = document.createElement('div');
    divDuration.classList.add('duration');
    let divMonth = document.createElement('div');
    divMonth.classList.add('month-duration');
    divMonth.innerText = 'monthDuration: ' + item.monthDuration;
    let divHour = document.createElement('div');
    divHour.classList.add('hour-duration');
    divHour.innerText = 'hourDuration: ' + item.hourDuration;
    let modules = document.createElement('ul');
    modules.classList.add('modules');
    for (let itemOfModules of item.modules) {
        let modulesItem = document.createElement('li');
        modulesItem.classList.add('modules-item');
        modulesItem.innerText = itemOfModules;
        modules.appendChild(modulesItem);
    }
    divDuration.append(divMonth, divHour);
    divContainer.append(header, divDuration, modules);
}
