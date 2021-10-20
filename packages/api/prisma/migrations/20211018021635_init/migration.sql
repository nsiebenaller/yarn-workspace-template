-- CreateTable
CREATE TABLE "accounts" (
    "user_id" SERIAL NOT NULL,
    "password" VARCHAR(50) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "created_on" TIMESTAMP(6) NOT NULL,
    "last_login" TIMESTAMP(6),
    "birthday" TIMESTAMP(6),

    CONSTRAINT "accounts_pkey" PRIMARY KEY ("user_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "accounts_email_key" ON "accounts"("email");
