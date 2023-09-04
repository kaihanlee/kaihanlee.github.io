document.getElementById("saveButton").addEventListener("click", async function() {
    const octokit = new Octokit({ auth: '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' }); // Replace with your GitHub access token

    const repositoryOwner = 'kaihanlee';
    const repositoryName = 'kaihanlee.github.io';
    const filePath = 'assets/js/new-file.txt'; // Specify the path and name of the new file
    const fileContent = 'This is the content of the new file.';

    try {
        const response = await octokit.request('PUT /repos/{owner}/{repo}/contents/{path}', {
            owner: repositoryOwner,
            repo: repositoryName,
            path: filePath,
            message: 'Create new file',
            content: Buffer.from(fileContent).toString('base64')
        });

        if (response.status === 201) {
            alert('File created successfully.');
        } else {
            alert('Failed to create the file.');
        }
    } catch (error) {
        console.error('Error creating the file:', error);
        alert('An error occurred while creating the file.');
    }
});
