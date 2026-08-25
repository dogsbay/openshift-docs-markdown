{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating object count quotas {id="creating-object-count-quotas_{{ context }}"}

To manage the consumption of standard namespaced resource types, create an object count quota. By creating an object count quota within a {{ product_title }} project, you can set defined limits on the number of objects, such as `BuildConfig` and `DeploymentConfig` objects. {._abstract}

When you use a resource quota, {{ product_title }} charges an object against the quota if the object exists in server storage. These quotas protect against exhaustion of storage resources.

**Procedure**

1.  To configure an object count quota for a resource, run the following command:
    ```terminal
    $ oc create quota <name> --hard=count/<resource>.<group>=<quota>,count/<resource>.<group>=<quota>
    ```
    ```terminal title="Example showing object count quota"
    $ oc create quota test --hard=count/deployments.extensions=2,count/replicasets.extensions=4,count/pods=3,count/secrets=4
    resourcequota "test" created
    ```
1.  To inspect the detailed status of the object count quota, use the following `oc describe` command:
    ```terminal
    $ oc describe quota test
    ```
    ```terminal title="Example output"
    Name:                         test
    Namespace:                    quota
    Resource                      Used  Hard
    --------                      ----  ----
    count/deployments.extensions  0     2
    count/pods                    0     3
    count/replicasets.extensions  0     4
    count/secrets                 0     4
    ```

    This example limits the listed resources to the hard limit in each project in the cluster.