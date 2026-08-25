{%- set _mod_docs_content_type = "PROCEDURE" %}
# Adding storage to a specific container {id="adding-storage-to-a-specific-container_{{ context }}"}

If your devfile has multiple containers, you can use the `--container` flag to specify the container you want to attach storage to.

**Procedure**

1.  Create a devfile with multiple containers:
    ```yaml
    components:
      - name: runtime (1)
        container:
          image: registry.access.redhat.com/ubi8/nodejs-12:1-36
          memoryLimit: 1024Mi
          endpoints:
            - name: "3000-tcp"
              targetPort: 3000
          mountSources: true
      - name: funtime (2)
        container:
          image: registry.access.redhat.com/ubi8/nodejs-12:1-36
          memoryLimit: 1024Mi
    ```
    1.  The `runtime` container.
    1.  The `funtime` container.
1.  To create storage for the `runtime` container:
    ```terminal
    $ odo storage create store --path /data --size 1Gi --container runtime
    ```
    ```terminal title="Output of the command"
    ✓  Added storage store to nodejs-testing-xnfg
      Please use `odo push` command to make the storage accessible to the component
    ```
1.  Verify that the storage is now attached to your component by listing all storage in the component:
    ```terminal
    $ odo storage list
    ```
    ```terminal title="Example output"
    The component 'nodejs-testing-xnfg' has the following storage attached:
      NAME      SIZE     PATH      CONTAINER     STATE
      store     1Gi      /data     runtime       Not Pushed
    ```
1.  Push the changes to the cluster:
    ```terminal
    $ odo push
    ```