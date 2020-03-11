import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Input from './Input';
import Table from './Table';
import Pagination from './Pagination';

async function getData(url) {
    try {
        const response = await axios.get(url);
        
        return response.data;
    } catch (error) {
        console.log('error', error);
    }
}

export default function FetchGitRepo () {
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('');
    const [repoList, setRepoList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [dataPerPage] = useState(5);
    const indexoffLastData = currentPage * dataPerPage;
    const indexoffFirstData = indexoffLastData - dataPerPage;
    const currentRepo = repoList.slice(indexoffFirstData, indexoffLastData);

    useEffect(() => {
        const url = `https://api.github.com/search/repositories?q=stars:>${query}+language:javascript&sort=stars&order=desc`;

        if (!query) {
            return;
        }
        setLoading(true);
        getData(url).then(results=>results.items
            .map(({id, homepage, stargazers_count, full_name, html_url, forks, watchers}) => {
                
            return {id, homepage, stargazers_count, full_name, html_url, forks, watchers};
        })
        )
        .then(repoList => setRepoList(repoList));
        setLoading(false);
    }, [query]);

    const handleClick = (e) => {
        e.preventDefault();
        
        setQuery(search);
    }

    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    
    return (
      <div className="repoList">
        <h3>Top Rated Javascript GitHub Repositories</h3>
        <Input
          className="form-control"
          placeholder="See all javascript repos with highest stars than entered value"
          type="number"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <button className="btn btn-info" onClick={handleClick}>
          <span className="glyphicon glyphicon-search"></span>
        </button>
        <Table repoList={currentRepo} loading={loading} />
        <Pagination
          dataPerPage={dataPerPage}
          totalData={repoList.length}
          paginate={paginate}
        />
      </div>
    );
};
