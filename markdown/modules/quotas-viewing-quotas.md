{%- set _mod_docs_content_type = "PROCEDURE" %}
# Viewing a quota {id="quota-viewing-quotas_{{ context }}"}

View the usage statistics for the hard limits defined in a project quota to monitor resource consumption and plan cluster capacity. {._abstract}

You can view quota usage statistics on the project’s **Quota** page in the web console or by using the CLI.

**Procedure**

1.  Get the list of quotas defined in the project. For example, for a project called
`demoproject`:
    ```terminal
    $ oc get quota -n demoproject
    ```
    ```terminal title="Example output"
    NAME                           AGE    REQUEST                                                                                                      LIMIT
    besteffort                     4s     pods: 1/2
    compute-resources-time-bound   10m    pods: 0/2                                                                                                    limits.cpu: 0/1, limits.memory: 0/1Gi
    core-object-counts             109s   configmaps: 2/10, persistentvolumeclaims: 1/4, replicationcontrollers: 1/20, secrets: 9/10, services: 2/10
    ```
1.  Describe the quota you are interested in, for example the `core-object-counts`
quota:
    ```terminal
    $ oc describe quota core-object-counts -n demoproject
    ```
    ```terminal title="Example output"
    Name:			core-object-counts
    Namespace:		demoproject
    Resource		Used	Hard
    --------		----	----
    configmaps		3	10
    persistentvolumeclaims	0	4
    replicationcontrollers	3	20
    secrets			9	10
    services		2	10
    ```