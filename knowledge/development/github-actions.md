---
title: Github Actions
description: Guide to set up Github Actions for your projects
---

# Github Actions

This is a guide to set up Github Actions for both static and remote projects.

## Github Pages

Deploying to Github Pages is a perfect solution for static content.

### Prerequisites

First of all, we need to add permissions for Github Pages to read the content of our repository, authenticate and deploy:

```yaml
permissions:
  contents: read
  pages: write
  id-token: write
```

It's not required but recommended to configure behavior for concurrent builds. For example, if deployment is automatic for pushes to the branch, this will allow the previous build to finish:

```yaml
concurrency:
  group: "pages"
  cancel-in-progress: false
```

### Steps

Add these after the initial and build steps:

```yaml
steps:
    ...
  - name: Setup Pages
    uses: actions/configure-pages@v6

  - name: Upload artifact
    uses: actions/upload-pages-artifact@v5
    with:
      path: 'dist/' # path for content to upload

  - name: Deploy to GitHub Pages
    id: deployment
    uses: actions/deploy-pages@v5
```

## Remote Server

This is the solution for projects that require a backend and a dedicated server.

### Prerequisites

Generate Github Actions keys on the server:

```bash
ssh-keygen -f ~/.ssh/github-actions
```

And allow access to the server by these keys:

```bash
cat ~/.ssh/github-actions.pub >> ~/.ssh/authorized_keys
```

### Secrets

- **SSH_USER** - User for SSH connection
- **SSH_HOST** - Host for SSH connection
- **SSH_PORT** - Port for SSH connection
- **SSH_KEY** - Private SSH key for Github Actions
- **DEPLOY_PATH** - Path to the project root (pay attention to trailing slash)

### Steps

First of all, you need to configure SSH agent service with your private key and add your server to known hosts:

```yaml
- name: Setup SSH agent
  uses: webfactory/ssh-agent@v0.10.0
  with:
    ssh-private-key: ${{ secrets.SSH_KEY }}

- name: Add server to known hosts
  run: |
    mkdir -p ~/.ssh
    ssh-keyscan -p ${{ secrets.SSH_PORT }} ${{ secrets.SSH_HOST }} >> ~/.ssh/known_hosts
```

Then you can upload a built artifact to your server like this:

```yaml
- name: Upload artifact
  run: |
    rsync -e "ssh -p ${{ secrets.SSH_PORT }}" --archive --compress --delete ./dist/ ${{ secrets.SSH_USER }}@${{ secrets.SSH_HOST }}:${{ secrets.DEPLOY_PATH }}/web/
```

Or run a command directly on the server:

```yaml
- name: Run scripts
  run: |
    ssh -p ${{ secrets.SSH_PORT }} ${{ secrets.SSH_USER }}@${{ secrets.SSH_HOST }} '${{ secrets.DEPLOY_PATH }}/.deploy/scripts.sh'
```

*Pay attention to `./dist/`, `/web/` and `/.deploy/scripts.sh` sections as they are used as examples here.*
