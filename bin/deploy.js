const fs = require('fs')

const branchName = 'site-deployment'

import('execa').then(({ execaSync }) => {
	try {
		execaSync('git', ['checkout', '-B', branchName])
		console.log('Building started...')
		execaSync('yarn', ['generate'])
		const folderName = "dist"
		execaSync('cp', ['-r', './.github', folderName])
		execaSync('git', ['--work-tree', folderName, 'add', '--all'])
		execaSync('git', ['--work-tree', folderName, 'commit', '-m', branchName])
		console.log(`Pushing to ${branchName}...`)
		execaSync('git', ['push', 'origin', `HEAD:${branchName}`, '--force'])
		execaSync('rm', ['-r', folderName])
		execaSync('git', ['checkout', '-f', 'main'])
		execaSync('git', ['branch', '-D', branchName])
		console.log('Successfully deployed, check your settings')
	} catch (e) {
		console.log(e.message)
		process.exit(1)
	}
})