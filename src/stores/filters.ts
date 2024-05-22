import { defineStore } from "pinia";
import axios from "axios";
export const useFilters = defineStore("filters", {
  state: () => ({
    filter: "",
		name: "",
    page: localStorage.getItem("pageNumber") || 1,
    pageLocal: localStorage.getItem("page") || 1,
    items: [] as any,
		statusRequest: true,
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
        console.log(data);
				if(await data.status !== 200){
					this.statusRequest = false
				}
				else{
					this.statusRequest = true
				}
        this.items = data.data.results;
        const episodeData = await axios.get(`${data.data.results.episode}`);
        console.log(episodeData.data.name);
        const episodeUrls = data.data.results.flatMap(
          (item: any) => item.episode
        )

        // Преобразуем массив URL-адресов эпизодов в массив имён эпизодов
        const episodeNames = await Promise.all(
          episodeUrls.map(async (url: any) => {
            const response = await axios.get(url)
            return response.data.name
          })
        )

        this.items.forEach((item: any) => {
          item.episode = episodeNames
        });
      } catch (error) {
        console.log(error)
      }
    },
  },
})
