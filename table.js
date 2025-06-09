document.addEventListener('DOMContentLoaded', function() {
    const tableBody = document.getElementById('players-table-body');
    
    tableBody.innerHTML = playersData.map((player, index) => {
        const totalGames = player.wins + player.losses;
        const qualified = totalGames >= 40 ? '✅' : '❌';
        
        return `
            <tr>
                <td class="px-3 sm:px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-500">
                    ${index + 1}
                </td>
                <td class="px-3 sm:px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    ${player.nickname}
                </td>
                <td class="px-3 sm:px-6 py-4 whitespace-nowrap text-sm font-medium ${getRankColorClass(player.rank)}">
                    ${player.rank}
                </td>
                <td class="px-3 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    ${player.rating}
                </td>
                <td class="px-3 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    ${player.wins}
                </td>
                <td class="px-3 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    ${player.losses}
                </td>
                <td class="px-3 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    ${totalGames} ${qualified}
                </td>
                <td class="px-3 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    ${player.gateway}
                </td>
            </tr>
        `;
    }).join('');
});

function getRankColorClass(rank) {
    if (!rank) return 'text-gray-400';
    switch(rank) {
        case 'S': return 'text-yellow-500';
        case 'A': return 'text-red-500';
        case 'B': return 'text-purple-500';
        case 'C': return 'text-blue-800';
        case 'D': return 'text-cyan-500';
        case 'E': return 'text-teal-600';
        case 'F': return 'text-gray-400';
        default: return 'text-gray-400';
    }
} 