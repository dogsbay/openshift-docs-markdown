{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating an etcd cluster using an Operator {id="olm-creating-etcd-cluster-from-operator_{{ context }}"}

You can create an etcd cluster using the etcd Operator in the {{ product_title }} web console. The Operator creates the pods, services, and other cluster resources for you. {._abstract}

**Prerequisites**

{% if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}
*   Access to an {{ product_title }} {{ product_version }} cluster.
{% endif %}
{% if openshift_dedicated or openshift_rosa or openshift_rosa_hcp %}
*   Access to a {{ product_title }} cluster.
{%- endif %}
*   The etcd Operator already installed cluster-wide by an administrator.

**Procedure**

1.  Create a new project in the {{ product_title }} web console for this procedure. This example uses a project called `my-etcd`.
1.  Navigate to the **Ecosystem** → **Installed Operators** page.

    The Operators installed on the cluster by the
{%- if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}
    cluster administrator
{%- endif %}
{%- if openshift_dedicated or openshift_rosa or openshift_rosa_hcp %}
    dedicated-admin
{%- endif %}
    and available for use are shown here as a list of cluster service versions (CSVs). Each CSV launches and manages the software provided by the Operator.

    :::tip

    You can get this list from the CLI by running the following command:

    ```terminal
    $ oc get csv
    ```
    
    :::

1.  On the **Installed Operators** page, click the etcd Operator to view more details and available actions.

    As shown under **Provided APIs**, this Operator makes available three new resource types, including one for an **etcd Cluster**, the `EtcdCluster` resource.

    These objects work similarly to the built-in native Kubernetes ones, such as `Deployment` or `ReplicaSet`, but contain logic specific to managing etcd.
1.  Create a new etcd cluster:
    1.  In the **etcd Cluster** API box, click **Create instance**.
    1.  Optional: Modify the minimal starting template of an `EtcdCluster` object, such as the size of the cluster.
    1.  Click **Create** to finalize. This triggers the Operator to start up the pods, services, and other components of the new etcd cluster.
1.  Click the **example** etcd cluster.
1.  Click the **Resources** tab.

    Your project contains several resources that the Operator created and configured.
1.  Verify that a Kubernetes service exists that allows you to access the database from other pods in your project.
1.  Optional: To grant another user permission to create Operator-managed applications in the project, add the `edit` role by running the following command:
    ```terminal
    $ oc policy add-role-to-user edit <user> -n <target_project>
    ```

    Users with the `edit` role in a project can create, manage, and delete Operator-managed application instances, such as an etcd cluster.

**Results**

You have an etcd cluster that reacts to failures and rebalances data as pods become unhealthy or migrate between nodes in the cluster.
{%- if not (openshift_dedicated or openshift_rosa or openshift_rosa_hcp) %}
Cluster administrators
{%- endif %}
{%- if openshift_dedicated or openshift_rosa or openshift_rosa_hcp %}
dedicated-admins
{%- endif %}
or developers with proper access can use the database with their applications.