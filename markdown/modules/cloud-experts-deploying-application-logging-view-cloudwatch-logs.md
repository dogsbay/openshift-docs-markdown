{%- set _mod_docs_content_type = "PROCEDURE" %}
# Viewing the logs with CloudWatch {id="cloud-experts-deploying-application-logging-view-cloudwatch-logs_{{ context }}"}

You can verify your logs within CloudWatch on the AWS web console. {._abstract}

**Procedure**

1.  Navigate to **CloudWatch** on the [AWS web console](https://aws.amazon.com/free/?gclid=EAIaIQobChMIoq2X27fZhgMVaAutBh1Q2w1jEAAYASAAEgL5y_D_BwE&trk=7541ebd3-552d-4f98-9357-b542436aa66c&sc_channel=ps&ef_id=EAIaIQobChMIoq2X27fZhgMVaAutBh1Q2w1jEAAYASAAEgL5y_D_BwE:G:s&s_kwcid=AL!4422!3!651751058796!e!!g!!aws%20console!19852662149!145019243977&all-free-tier.sort-by=item.additionalFields.SortRank&all-free-tier.sort-order=asc&awsf.Free%20Tier%20Types=*all&awsf.Free%20Tier%20Categories=*all).
1.  In the left menu, click **Logs** and then **Log groups** to see the different groups of logs. You should see 3 groups:
    *   `rosa-<cluster-name>.application`
    *   `rosa-<cluster-name>.audit`
    *   `rosa-<cluster-name>.infrastructure`

        ![cloud-experts-deploying-application-logging-cw](/images/cloud-experts-deploying-application-logging-cw.png)
1.  Click `rosa-<cluster-name>.application`.
1.  Click the log stream for the frontend pod.

    ![cloud-experts-deploying-application-logging-logstream2](/images/cloud-experts-deploying-application-logging-logstream2.png)
1.  Filter for `stdout` and `stderr`.
1.  Expand the row to show the messages you entered earlier and other pertinent information.

    ![cloud-experts-deploying-application-logging-stderr](/images/cloud-experts-deploying-application-logging-stderr.png)
1.  Return to the log streams and select the microservice.
1.  Enter "microservice" in the search bar to see other messages in your logs.
1.  Expand one of the entries to see the color the frontend pod received from microservice and which pod sent that color to the frontend pod.

    ![cloud-experts-deploying-application-logging-messages](/images/cloud-experts-deploying-application-logging-messages.png)