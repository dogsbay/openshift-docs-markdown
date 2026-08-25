# Managing allowed secrets {id="service-accounts-managing-secrets_{{ context }}"}

You can use the service account’s secrets in your application’s pods for:

*   Image pull secrets, providing credentials used to pull images for the pod’s containers
*   Mountable secrets, injecting the contents of secrets into containers as files

**Procedure**

1.  Create a secret:
    ```
    $ oc create secret generic <secret_name> \
        --from-file=<file>.txt

    secret/<secret_name>
    ```
1.  To allow a secret to be used as an image pull secret by a service account’s
pods, run:
    ```
    $ oc secrets link --for=pull <serviceaccount-name> <secret-name>
    ```
1.  To allow a secret to be mounted by a service account’s pods, run:
    ```
    $ oc secrets link --for=mount <serviceaccount-name> <secret-name>
    ```
1.  Confirm that the secret was added to the service account:
    ```
    $ oc describe serviceaccount <serviceaccount-name>
    Name:               <serviceaccount-name>
    Labels:             <none>
    Image pull secrets:	robot-dockercfg-624cx
                       	my-pull-secret

    Mountable secrets: 	robot-token-uzkbh
                       	robot-dockercfg-624cx
                       	secret-plans

    Tokens:            	robot-token-8bhpp
                       	robot-token-uzkbh
    ```