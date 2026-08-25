# {{ odo_title }} push workflow {id="odo-push-workflow_{{ context }}"}
This section describes `{{ odo_title }} push`{minja} workflow. {{ odo_title }} push deploys user code on an {{ product_title }} cluster with all the necessary {{ product_title }} resources.

1.  Creating resources

    If not already created, `{{ odo_title }}`{minja} push creates the following {{ product_title }} resources:
    *   `DeploymentConfig` object:
        *   Two init containers are executed: `copy-supervisord` and `copy-files-to-volume`. The init containers copy files onto the `emptyDir` and the `PersistentVolume` type of volumes respectively.
        *   The application container starts. The first process in the application container is the `go-init` process with PID=1.
        *   `go-init` process starts the SupervisorD daemon.

            :::note

            The user application code has not been copied into the application container yet, so the `SupervisorD` daemon does not execute the `run` script.
            
            :::

    *   `Service` object
    *   `Secret` objects
    *   `PersistentVolumeClaim` object
1.  Indexing files
    *   A file indexer indexes the files in the source code directory. The indexer traverses through the source code directories recursively and finds files which have been created, deleted, or renamed.
    *   A file indexer maintains the indexed information in an {{ odo_title }} index file inside the `.odo` directory.
    *   If the {{ odo_title }} index file is not present, it means that the file indexer is being executed for the first time, and creates a new {{ odo_title }} index JSON file.
    The {{ odo_title }} index JSON file contains a file map - the relative file paths of the traversed files and the absolute paths of the changed and deleted files.
1.  Pushing code

    Local code is copied into the application container, usually under `/tmp/src`.
1.  Executing `assemble-and-restart`

    On a successful copy of the source code, the `assemble-and-restart` script is executed inside the running application container.