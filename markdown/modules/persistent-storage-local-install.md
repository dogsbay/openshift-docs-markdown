{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a local project for Local Storage Operator {id="local-storage-install_{{ context }}"}

To install the Local Storage Operator (LSO) to provision and manage local persistent storage volumes in your cluster, first create the `openshift-local-storage` project. {._abstract}

**Prerequisites**

*   Access to the {{ product_title }} web console or command-line interface (CLI).

**Procedure**

1.  Create the `openshift-local-storage` project by running the following command:
    ```terminal
    $ oc adm new-project openshift-local-storage
    ```
1.  Optional: Allow local storage creation on infrastructure nodes.

    You might want to use the LSO to create volumes on infrastructure nodes in support of components such as logging and monitoring.

    You must adjust the default node selector so that the LSO includes the infrastructure nodes, and not just worker nodes.

    To block the LSO from inheriting the cluster-wide default selector, run the following command:
    ```terminal
    $ oc annotate namespace openshift-local-storage openshift.io/node-selector=''
    ```
1.  Optional: Allow local storage to run on the management pool of CPUs in single-node deployment.

    Use the LSO in single-node deployments and allow the use of CPUs that belong to the `management` pool. Perform this step on single-node installations that use management workload partitioning.

    To allow LSO to run on the management CPU pool, run following command:
    ```terminal
    $ oc annotate namespace openshift-local-storage workload.openshift.io/allowed='management'
    ```

**Next steps**

Install the LSO Operator.