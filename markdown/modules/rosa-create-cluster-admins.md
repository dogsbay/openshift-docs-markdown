{%- set _mod_docs_content_type = "PROCEDURE" %}
# Granting `cluster-admin` access {id="rosa-create-cluster-admins_{{ context }}"}

As the user who created the cluster, add the `cluster-admin` user role to your account to have the maximum administrator privileges. These privileges are not automatically assigned to your user account when you create the cluster. {._abstract}

Additionally, only the user who created the cluster can grant cluster access to other `cluster-admin` or `dedicated-admin` users. Users with `dedicated-admin` access have fewer privileges. As a best practice, limit the number of `cluster-admin` users to as few as possible.

**Prerequisites**

*   You have added an identity provider (IDP) to your cluster.
*   You have the IDP user name for the user you are creating.
*   You are logged in to the cluster.

**Procedure**

1.  Give your user `cluster-admin` privileges:
    ```terminal
    $ rosa grant user cluster-admin --user=<idp_user_name> --cluster=<cluster_name>
    ```
1.  Verify your user is listed as a cluster administrator:
    ```terminal
    $ rosa list users --cluster=<cluster_name>
    ```
    ```terminal title="Example output"
    GROUP             NAME
    cluster-admins    rh-rosa-test-user
    dedicated-admins  rh-rosa-test-user
    ```
{%- if not openshift_rosa_hcp %}
1.  Enter the following command to verify that your user now has `cluster-admin` access. A cluster administrator can run this command without errors, but a dedicated administrator cannot.
    ```terminal
    $ oc get all -n openshift-apiserver
    ```
    ```terminal title="Example output"
    NAME                  READY   STATUS    RESTARTS   AGE
    pod/apiserver-6ndg2   1/1     Running   0          17h
    pod/apiserver-lrmxs   1/1     Running   0          17h
    pod/apiserver-tsqhz   1/1     Running   0          17h
    NAME          TYPE        CLUSTER-IP      EXTERNAL-IP   PORT(S)   AGE
    service/api   ClusterIP   172.30.23.241   <none>        443/TCP   18h
    NAME                       DESIRED   CURRENT   READY   UP-TO-DATE   AVAILABLE   NODE SELECTOR                     AGE
    daemonset.apps/apiserver   3         3         3       3            3           node-role.kubernetes.io/master=   18h
    ```
{% endif %}