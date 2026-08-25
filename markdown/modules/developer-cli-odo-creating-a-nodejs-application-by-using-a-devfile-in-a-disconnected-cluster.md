{%- set _mod_docs_content_type = "PROCEDURE" %}

# Creating a NodeJS application by using a devfile in a disconnected cluster {id="developer-cli-odo-creating-a-nodejs-application-by-using-a-devfile-in-a-disconnected-cluster_{{ context }}"}


:::warning

This procedure is using external dependencies such as `nodejs-ex.git` application that are not maintained by Red Hat. These dependencies are not maintained with the documentation and their functionality cannot be guaranteed.

:::


**Prerequisites**

*   You have created and logged into a disconnected cluster.
*   You have added  `raw.githubusercontent.com`, `registry.access.redhat.com`, and `registry.npmjs.org` URLs in your proxy.

**Procedure**

1.  Define your NodeJS application in a devfile:
    ```yaml title="Example of a devfile"
    schemaVersion: 2.0.0
    metadata:
    name: nodejs
    starterProjects:
    - name: nodejs-starter
      git:
        remotes:
          origin: "https://github.com/odo-devfiles/nodejs-ex.git"
    components:
    - name: runtime
      container:
        image: registry.access.redhat.com/ubi8/nodejs-12:1-36
        memoryLimit: 1024Mi
        endpoints:
          - name: "3000/tcp"
            targetPort: 3000
        env:
          - name: HTTP_PROXY
            value: http://<proxy-host>:<proxy-port>
          - name: HTTPS_PROXY
            value: http://<proxy-host>:<proxy-port>
        mountSources: true
    commands:
    - id: devbuild
      exec:
        component: runtime
        commandLine: npm install
        workingDir: ${PROJECTS_ROOT}
        group:
          kind: build
          isDefault: true
    - id: build
      exec:
        component: runtime
        commandLine: npm install
        workingDir: ${PROJECTS_ROOT}
        group:
          kind: build
    - id: devrun
      exec:
        component: runtime
        commandLine: npm start
        workingDir: ${PROJECTS_ROOT}
        group:
          kind: run
          isDefault: true
    - id: run
      exec:
        component: runtime
        commandLine: npm start
        workingDir: ${PROJECTS_ROOT}
        group:
          kind: run
    ```
1.  Create the application and push the changes to the cluster:
    ```terminal
    $ odo create nodejs --devfile <path-to-your-devfile> --starter $$ odo push
    ```
    ```terminal title="Example output"
    [...]
    Pushing devfile component nodejs
     ✓  Changes successfully pushed to component
    ```
1.  Create a URL to access your application and push it to the cluster:
    ```terminal
    $ odo url create url1 --port 3000 --host example.com --ingress && odo push
    ```
    ```terminal title="Example output"
    Validation
     ✓  Validating the devfile [145374ns]

    Creating Kubernetes resources for component nodejs
     ✓  Waiting for component to start [14s]

    Applying URL changes
     ✓  URL url1: http://url1.abcdr.com/ created

    Syncing to component nodejs
     ✓  Checking file changes for pushing [2ms]
     ✓  Syncing files to the component [3s]

    Executing devfile commands for component nodejs
     ✓  Executing devbuild command "npm install" [4s]
     ✓  Executing devrun command "npm start" [3s]

    Pushing devfile component nodejs
     ✓  Changes successfully pushed to component
    ```
1.  Add the storage to your application
    ```terminal
    $ odo storage create <storage-name> --path /data --size 5Gi
    ```
    ```terminal title="Example output"
    ✓  Added storage abcde to nodejs

    Please use `odo push` command to make the storage accessible to the component
    ```
1.  Push the changes to the cluster:
    ```terminal
    $ odo push
    ```