import { UserData } from "../../data/leaderboard";
import { hashTableSearch, quickSort } from "../algorithm";

describe('quickSort', () => {
    it('should sort an array of UserData objects by bananas in descending order', () => {
        const unsortedArray: UserData[] = [
            {
                bananas: 50,
                lastDayPlayed: '2018-11-22',
                longestStreak: 1,
                name: 'Messi',
                stars: 6,
                subscribed: false,
                uid: '00D1LA8puAa1GINkVpfgC1TmO0m1',
            },
            {
                bananas: 100,
                lastDayPlayed: '2018-11-22',
                longestStreak: 1,
                name: 'Goal G',
                stars: 6,
                subscribed: false,
                uid: '00D1LA8puAa1GINkVpfgC1TmO0m1',
            },
            {
                bananas: 200,
                lastDayPlayed: '2018-11-22',
                longestStreak: 1,
                name: 'Rica Ella Francisco',
                stars: 6,
                subscribed: false,
                uid: '00D1LA8puAa1GINkVpfgC1TmO0m1',
            },
        ];

        const sortedArray = quickSort(unsortedArray);

        expect(sortedArray[0].bananas).toBe(200);

    });
});

describe('hashTableSearch', () => {
    it('should find a UserData object by name from an array', () => {
        const dataArray: UserData[] = [
            {
                bananas: 50,
                lastDayPlayed: '2018-11-22',
                longestStreak: 1,
                name: 'Messi',
                stars: 6,
                subscribed: false,
                uid: '00D1LA8puAa1GINkVpfgC1TmO0m1',
            },
            {
                bananas: 100,
                lastDayPlayed: '2018-11-22',
                longestStreak: 1,
                name: 'Goal G',
                stars: 6,
                subscribed: false,
                uid: '00D1LA8puAa1GINkVpfgC1TmO0m1',
            },
            {
                bananas: 200,
                lastDayPlayed: '2018-11-22',
                longestStreak: 1,
                name: 'Rica Ella Francisco',
                stars: 6,
                subscribed: false,
                uid: '00D1LA8puAa1GINkVpfgC1TmO0m1',
            },
           
        ];

        const searchResult = hashTableSearch(dataArray, 'Rica Ella Francisco');

        expect(searchResult).toBeDefined();
        expect(searchResult?.name).toBe('Rica Ella Francisco'); 

    });

    it('should return null when no UserData object is found by name', () => {
        const dataArray: UserData[] = [
            {
                bananas: 50,
                lastDayPlayed: '2018-11-22',
                longestStreak: 1,
                name: 'Messi',
                stars: 6,
                subscribed: false,
                uid: '00D1LA8puAa1GINkVpfgC1TmO0m1',
            },
            {
                bananas: 100,
                lastDayPlayed: '2018-11-22',
                longestStreak: 1,
                name: 'Goal G',
                stars: 6,
                subscribed: false,
                uid: '00D1LA8puAa1GINkVpfgC1TmO0m1',
            },
            {
                bananas: 200,
                lastDayPlayed: '2018-11-22',
                longestStreak: 1,
                name: 'Rica Ella Francisco',
                stars: 6,
                subscribed: false,
                uid: '00D1LA8puAa1GINkVpfgC1TmO0m1',
            },
        ];

        const searchResult = hashTableSearch(dataArray, 'Non-Existent Name');
        expect(searchResult).toBeNull();
    });
});