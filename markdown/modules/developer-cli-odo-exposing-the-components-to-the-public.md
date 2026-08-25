{%- set _mod_docs_content_type = "PROCEDURE" %}

# Exposing components to the public {id="exposing-the-components-to-the-public_{{ context }}"}

**Procedure**

1.  Navigate to the `frontend` directory:
    ```terminal
    $ cd frontend
    ```
1.  Create an external URL for the application:
    ```terminal
    $ odo url create frontend --port 8080
    ```
    ```terminal title="Example output"
     ✓  URL frontend created for component: frontend

    To create URL on the OpenShift  cluster, use `odo push`
    ```
1.  Apply the changes:
    ```terminal
    $ odo push
    ```
    ```terminal title="Example output"
    Validation
     ✓  Checking component [21ms]

    Configuration changes
     ✓  Retrieving component data [35ms]
     ✓  Applying configuration [29ms]

    Applying URL changes
     ✓  URL frontend: http://frontend-app-myproject.192.168.42.79.nip.io created

    Pushing to component frontend of type local
     ✓  Checking file changes for pushing [1ms]
     ✓  No file changes detected, skipping build. Use the '-f' flag to force the build.
    ```
1.  Open the URL in a browser to view the application.


:::note

If an application requires permissions to the active service account to access the {{ product_title }} namespace and delete active pods, the following error may occur when looking at `odo log` from the back-end component:

`Message: Forbidden!Configured service account doesn't have access. Service account may have been revoked`

To resolve this error, add permissions for the service account role:

```terminal
$ oc policy add-role-to-group view system:serviceaccounts -n <project>
```

```terminal
$ oc policy add-role-to-group edit system:serviceaccounts -n <project>
```

Do not do this on a production cluster.

:::