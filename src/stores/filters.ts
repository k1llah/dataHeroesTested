import { defineStore } from "pinia";
import axios from "axios";
export const useFilters = defineStore("filters", {
  state: () => ({
    filter: "",
		name: "",
    page: localStorage.getItem("pageNumber") || 1,
    pageLocal: localStorage.getItem("page") || 1,
    items: [] as any,
  }),
  actions: {
    async getData(page: number) {
			if (
				localStorage.getItem("pageNumber") == null ||
				localStorage.getItem("pageNumber") == undefined
			) {
				localStorage.setItem("pageNumber", "1");
				this.page = Number(localStorage.getItem("pageNumber"));
			}
      try {
        const data = await axios.get(
          `https://rickandmortyapi.com/api/character?page=${page}&name=${this.name}&status=${this.filter}`
        );
				this.items = data.data.results;
				if(this.name === ""){
				const dataEpisodes = await axios.get(`https://rickandmortyapi.com/api/episode?page=${page}&name=${this.name}&status=${this.filter}`);
				console.log(dataEpisodes.data.results)
				this.items.episode = dataEpisodes.data.results
				console.log(this.items)
				this.items.forEach((el:any)=>{
					console.log(dataEpisodes.data.results)
					el.episode = dataEpisodes.data.results
					console.log(el.episode)
				})
			}
        // const episodeData = await axios.get(`${data.data.results.episode}`);
        // this.items = data.data.results;
				// console.log(data.data.results[0].episode)
        
        // const episodeUrls = await data.data.results.flatMap(
        //   (item: any) => item.episode
        // )
        // // Преобразуем массив URL-адресов эпизодов в массив имён эпизодов
        // const episodeNames = await Promise.all(
        //   episodeUrls.map(async (url: any) => {
        //     const response = await axios.get(`${data.data[0]}`)
				// 		console.log(response);
        //     return response.data.name
        //   })
        // )
        // this.items.forEach((item: any) => {
        //   item.episode = episodeNames
					
        // });
				// console.log(this.items);
      } catch (error) {
        console.log(error)
      }
    },
  },
})
