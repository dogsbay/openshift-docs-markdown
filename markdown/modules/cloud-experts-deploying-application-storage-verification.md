{%- set _mod_docs_content_type = "PROCEDURE" %}
# Verifying persistent storage {id="cloud-experts-deploying-application-storage-verification_{{ context }}"}

Verify that the file you created persists after the pod is recreated and confirm the contents are intact. {._abstract}

**Procedure**

1.  Wait for the pod to re-create.
1.  On the OSToy app console, click **Persistent Storage** in the left menu.
1.  Find the file you created, and open it to view and confirm the contents.
    ![cloud-experts-storage-ostoy-existingfile](/_assets/images/cloud-experts-storage-ostoy-existingfile.png)

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
1.  Verify that the output is the text you entered in the OSToy app console.
    ```terminal title="Example terminal"
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
1.  Type `exit` in your terminal to quit the session and return to the CLI.