import React, {Fragment} from 'react'

export default function Table({ repoList, loading}) {
    if (loading) {
        return <h2>Loading...</h2>
    }
    
    return (
        <table className="table table-bordered table-hover table-dark">
            <thead>
            <tr>
                <th scope="col">Full Name</th>
                <th scope="col">Home Page</th>
                <th scope="col">GitHub Url</th>
                <th scope="col">Total Star</th>
                <th scope="col">Forks</th>
                <th scope="col">Watchers</th>
            </tr>
            </thead>
            {repoList.map(item => {
                return (
                    <Fragment  key={item.id}>
                        <tbody>
                            <tr>
                                <td>{item.full_name}</td>
                                <td><a href={item.homepage}>{item.homepage}</a></td>
                                <td><a href={item.html_url}>{item.html_url}</a></td>
                                <td>{item.stargazers_count}</td>
                                <td>{item.forks}</td>
                                <td>{item.watchers}</td>
                            </tr>
                        </tbody>
                    </Fragment>
                );
            })
            }
        </table>
    )
}
