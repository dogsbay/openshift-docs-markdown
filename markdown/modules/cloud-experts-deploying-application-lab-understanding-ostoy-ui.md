{%- set _mod_docs_content_type = "CONCEPT" %}
# Understanding the OSToy UI {id="cloud-experts-deploying-application-lab-understanding-ostoy-ui_{{ context }}"}

The following diagram explains the various parts of the OSToy application’s UI. {._abstract}

![Preview of the OSToy homepage](/images/ostoy-homepage.png)

1.  Shows the pod name that served your browser the page.
1.  **Home:** The main page of the application where you can perform some of the functions listed which we will explore.
1.  **Persistent Storage:** Allows you to write data to the persistent volume bound to this application.
1.  **Config Maps:**  Shows the contents of configmaps available to the application and the key:value pairs.
1.  **Secrets:** Shows the contents of secrets available to the application and the key:value pairs.
1.  **ENV Variables:** Shows the environment variables available to the application.
1.  **Networking:** Tools to illustrate networking within the application.
1.  **Pod Auto Scaling:** Tool to increase the load of the pods and test the HPA.
1.  **ACK S3:** Optional: Integrate with AWS S3 to read and write objects to a bucket. 

    :::note

    In order see the "ACK S3" section of OSToy, you must complete the ACK section of this workshop. If you decide not to complete that section, the OSToy application will still function.
    
    :::

1.  **About:** Displays more information about the application.