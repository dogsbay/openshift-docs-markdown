# Preparing a RHEL compute node {id="rhel-preparing-node_{{ context }}"}

Before you add a Red Hat Enterprise Linux (RHEL) machine to your {{ product_title }} cluster, you must register each host with Red Hat Subscription Manager (RHSM), attach an active {{ product_title }} subscription, and enable the required repositories.

1.  On each host, register with RHSM:
    ```terminal
    # subscription-manager register --username=<user_name> --password=<password>
    ```
1.  Pull the latest subscription data from RHSM:
    ```terminal
    # subscription-manager refresh
    ```
1.  List the available subscriptions:
    ```terminal
    # subscription-manager list --available --matches '*OpenShift*'
    ```
1.  In the output for the previous command, find the pool ID for an {{ product_title }} subscription and attach it:
    ```terminal
    # subscription-manager attach --pool=<pool_id>
    ```
1.  Disable all yum repositories:
    1.  Disable all the enabled RHSM repositories:
        ```terminal
        # subscription-manager repos --disable="*"
        ```
    1.  List the remaining yum repositories and note their names under `repo id`, if any:
        ```terminal
        # yum repolist
        ```
    1.  Use `yum-config-manager` to disable the remaining yum repositories:
        ```terminal
        # yum-config-manager --disable <repo_id>
        ```

        Alternatively, disable all repositories:
        ```terminal
        # yum-config-manager --disable \*
        ```

        Note that this might take a few minutes if you have a large number of available repositories
1.  Enable only the repositories required by {{ product_title }} {{ product_version }}:
    ```terminal {minja}
    # subscription-manager repos \
        --enable="rhel-8-for-x86_64-baseos-rpms" \
        --enable="rhel-8-for-x86_64-appstream-rpms" \
        --enable="rhocp-{{ product_version }}-for-rhel-8-x86_64-rpms" \
        --enable="fast-datapath-for-rhel-8-x86_64-rpms"
    ```
1.  Stop and disable firewalld on the host:
    ```terminal
    # systemctl disable --now firewalld.service
    ```

    :::note

    You must not enable firewalld later. If you do, you cannot access {{ product_title }} logs on the worker.
    
    :::