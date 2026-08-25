{%- set _mod_docs_content_type = "PROCEDURE" %}
# Accessing your cluster quickly {id="rosa-accessing-your-cluster-quick_{{ context }}"}

Access your cluster by using the required administrative credentials and the {{ oc_first }}. {._abstract}


:::note

As a best practice, access your cluster with an IDP account instead.

:::


**Procedure**

1.  Enter the following command:
    ```terminal
    $ rosa create admin --cluster=<cluster_name>
    ```
    ```terminal title="Example output"
    W: It is recommended to add an identity provider to login to this cluster. See 'rosa create idp --help' for more information.
    I: Admin account has been added to cluster 'cluster_name'. It may take up to a minute for the account to become active.
    I: To login, run the following command:
    oc login https://api.cluster-name.t6k4.i1.organization.org:6443 \
    --username cluster-admin \
    --password FWGYL-2mkJI-3ZTTZ-rINns
    ```
1.  Enter the `oc login` command, username, and password from the output of the previous command:
    ```terminal title="Example output"
    $ oc login https://api.cluster_name.t6k4.i1.organization.org:6443 \
    >  --username cluster-admin \
    >  --password FWGYL-2mkJI-3ZTTZ-rINns
    Login successful.

    You have access to 77 projects, the list has been suppressed. You can list all projects with 'projects'
    ```
1.  Using the default project, enter this `oc` command to verify that the cluster administrator access is created:
    ```terminal
    $ oc whoami
    ```
    ```terminal title="Example output"
    cluster-admin
    ```