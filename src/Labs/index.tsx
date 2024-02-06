function Labs() {
    const labData = [
    {
        name: 'Lab 1',
        href: '/labs/a1'
    },
    {
        name: 'Lab 2',
        href: '/labs/a2'
    },
    {
        name: 'Lab 3',
        href: '/labs/a3'
    }
    ];

    return (
    <ul>
        {labData.map((currLab) => {
            return (
            <li>
                <a href={currLab.href}>{currLab.name}</a>
            </li>);
        })}
    </ul>
    );
}

export default Labs;