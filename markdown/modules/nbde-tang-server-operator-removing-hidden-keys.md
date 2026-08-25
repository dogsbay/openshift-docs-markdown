{%- set _mod_docs_content_type = "PROCEDURE" %}
# Deleting hidden keys with the NBDE Tang Server Operator {id="deleting-hidden-keys-with-nbde-tang-server-operator_{{ context }}"}

After you rotate your Tang server keys, the previously active keys become hidden and are no longer advertised by the Tang instance. You can use the NBDE Tang Server Operator to remove encryption keys no longer used.


WARNING
:   Do not remove any hidden keys unless you are sure that all bound Clevis clients already use new keys.

**Prerequisites**

*   You must have `cluster-admin` privileges on an {{ product_title }} cluster.
*   You deployed a Tang server using the NBDE Tang Server Operator on your OpenShift cluster.
*   You have installed the OpenShift CLI (`oc`).

**Procedure**

1.  List the existing keys on your Tang server, for example:
    ```terminal
    $ oc -n nbde describe tangserver
    ```
    ```terminal title="Example output"
    …
    Status:
      Active Keys:
    	File Name:  	PvYQKtrTuYsMV2AomUeHrUWkCGg.jwk
    	Generated:  	2022-02-08 15:44:17.030090484 +0000
    	sha1:	    	PvYQKtrTuYsMV2AomUeHrUWkCGg
    	sha256:	    	QS82aXnPKA4XpfHr3umbA0r2iTbRcpWQ0VI2Qdhi6xg
    …
    ```
1.  Create a YAML file for removing all hidden keys, for example, `hidden-keys-deletion-tangserver.yaml`:
    ```yaml title="Example hidden-keys-deletion YAML for tang-operator"
    apiVersion: daemons.redhat.com/v1alpha1
    kind: TangServer
    metadata:
      name: tangserver
      namespace: nbde
      finalizers:
        - finalizer.daemons.tangserver.redhat.com
    spec:
      replicas: 1
      hiddenKeys: [] (1)
    ```
    1.  The empty array as the value of the `hiddenKeys` entry indicates you want to preserve no hidden keys on your Tang server.
1.  Apply the YAML file:
    ```terminal
    $ oc apply -f hidden-keys-deletion-tangserver.yaml
    ```

**Verification**

1.  After a certain amount of time depending on your configuration, check that the previous active key still exists, but no hidden key is available, for example:
    ```terminal
    $ oc -n nbde describe tangserver
    ```
    ```terminal title="Example output"
    …
    Spec:
      Hidden Keys:
        sha1:    PvYQKtrTuYsMV2AomUeHrUWkCGg
      Replicas:  1
    Status:
      Active Keys:
        File Name:  T-0wx1HusMeWx4WMOk4eK97Q5u4dY5tamdDs7_ughnY.jwk
        Generated:  2023-10-25 15:38:18.134939752 +0000
        sha1:       vVxkNCNq7gygeeA9zrHrbc3_NZ4
        sha256:     T-0wx1HusMeWx4WMOk4eK97Q5u4dY5tamdDs7_ughnY
    Status:
      Ready:                 1
      Running:               1
      Service External URL:  http://35.222.247.84:7500/adv
      Tang Server Error:     No
    Events:
    …
    ```