{%- set _mod_docs_content_type = "PROCEDURE" %}
# Confirming persistent storage {id="learning-deploying-application-storage-confirm_{{ context }}"}

To ensure your data is retained after a pod shuts down, you can verify the persistent storage configuration for your OSToy application. {._abstract}

**Procedure**

1.  Wait for the pod to re-create.
1.  On the OSToy application console, click **Persistent Storage** in the left menu.
1.  Find the file you created, and open it to view and confirm the contents.
    ![cloud-experts-storage-ostoy-existingfile](/images/cloud-experts-storage-ostoy-existingfile.png)

**Verification**

The deployment YAML file shows that we mounted [the directory](https://github.com/openshift-cs/rosaworkshop/blob/master/rosa-workshop/ostoy/yaml/ostoy-frontend-deployment.yaml#L61) `/var/demo_files` to our persistent volume claim.

1.  Retrieve the name of your front-end pod by running the following command:
    ```terminal
    $ oc get pods
    ```
1.  Start a secure shell (SSH) session in your container by running the following command:
    ```terminal
    $ oc rsh <pod_name>
    ```
1.  Go to the directory by running the following command:
    ```terminal
    $ cd /var/demo_files
    ```
1.  **Optional:** See all the files you created by running the following command:
    ```terminal
    $ ls
    ```
1.  Open the file to view the contents by running the following command:
    ```terminal
    $ cat test-pv.txt
    ```
1.  Verify that the output is the text you entered in the OSToy application console.

    **For example**:
    ```terminal
    $ oc get pods
    NAME                                  READY     STATUS    RESTARTS   AGE
    ostoy-frontend-5fc8d486dc-wsw24       1/1       Running   0          18m
    ostoy-microservice-6cf764974f-hx4qm   1/1       Running   0          18m

    $ oc rsh ostoy-frontend-5fc8d486dc-wsw24

    $ cd /var/demo_files/

    $ ls
    lost+found   test-pv.txt

    $ cat test-pv.txt
    OpenShift is the greatest thing since sliced bread!
    ```