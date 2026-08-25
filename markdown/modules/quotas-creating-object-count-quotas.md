{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating object count quotas {id="quota-creating-object-count-quotas_{{ context }}"}

Restrict resource consumption and standard object creation in a project by creating an object count quota for standard namespaced resource types.  {._abstract}

You can create an object count quota for all standard namespaced resource types on {{ product_title }}, such as `BuildConfig` and `DeploymentConfig` objects.

When using a resource quota, an object is charged against the quota upon creation. These types of quotas are useful to protect against exhaustion of resources. The quota can only be created if there are enough spare resources within the project.

**Procedure**

1.  To configure an object count quota for a resource, run the following command:
    ```terminal
    $ oc create quota <name> \
        --hard=count/<resource>.<group>=<quota>,count/<resource>.<group>=<quota>
    ```
    where:


    `<resource>`
    :   Specifies the name of the resource

    `<group>`
    :   Specifies the API group, if applicable. Use the `oc api-resources` command for a list of resources and their associated API groups.


        For example:

        ```terminal
        $ oc create quota test \
            --hard=count/deployments.apps=2,count/replicasets.apps=4,count/pods=3,count/secrets=4
        ```


        The following is an example output:

        ```terminal
        resourcequota "test" created
        ```


        This example limits the listed resources to the hard limit in each project in the cluster.
1.  Verify that the quota was created:
    ```terminal
    $ oc describe quota test
    ```
    ```terminal title="Example output"
    Name:                         test
    Namespace:                    quota
    Resource                      Used  Hard
    --------                      ----  ----
    count/deployments.apps        0     2
    count/pods                    0     3
    count/replicasets.apps        0     4
    count/secrets                 0     4
    ```